import apiClient from '@/lib/api-client';
import { deriveSeedsHash, generateSeedPhrase, handleSuccessfulLogin, performSignup } from '@/lib/cryptoOperations';
import { authService } from '@/services/auth-service';
import { toast } from 'react-toastify';
import { create } from 'zustand';

type ModalType = 'loginSeeds' | 'seedsRegister' | 'selectRegistration' | 'createAccount' | 'freeAccount' | 'settings' | null;

interface AuthState {
  seedsData: any | null;
  error: any | null;
  activeModal: ModalType;
  isLoading: boolean;
  isGeneratingSeeds: boolean,
  isAuthenticated: boolean;
  requires2FA: boolean;
  tempSeeds: string | null;
  // Actions
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  checkAuth: () => void;
  // Api Actions
  handleRegister: (retry?: boolean) => Promise<void>;
  resetRegState: () => void;
  loginWithSeeds: (seeds: string) => Promise<boolean>;
  loginWithOTP: (otp: string) => Promise<boolean>;
}

const isTokenExpired = (token: string) => {
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
};

export const useAuthStore = create<AuthState>((set, get) => ({
  activeModal: null,
  seedsData: null,
  error: null,
  isGeneratingSeeds: false,
  isLoading: false,
  isAuthenticated: false,
  requires2FA: false,
  tempSeeds: null,

  openModal: (type) => set({ activeModal: type, requires2FA: false, tempSeeds: null }),
  closeModal: () => set({ activeModal: null, requires2FA: false, tempSeeds: null }),

  resetRegState: () => set({ seedsData: null, error: null, isGeneratingSeeds: false }),

  handleRegister: async (isRetry = false) => {
    set({ isGeneratingSeeds: true, error: null });

    try {
      const seedPhrase = await generateSeedPhrase();
      const cryptoData = await performSignup(seedPhrase);

      const payload = {
        enc_salt: cryptoData.encSalt,
        encrypted_private_key: cryptoData.encryptedPrivateKey,
        encrypted_private_key_iv: cryptoData.encryptedPrivateKeyIV,
        encrypted_private_key_tag: cryptoData.encryptedPrivateKeyTag,
        pass_phrase: cryptoData.loginHash,
        public_key: cryptoData.publicKey,
      };
      await authService.registerSeeds(payload);
      set({ seedsData: seedPhrase, isGeneratingSeeds: false });
      toast.success("Succesfully get seeds")
    } catch (err: any) {
      if (!isRetry) {
        return get().handleRegister(true);
      }
      const message = err.response?.data?.[0] || "Registration failed. Please try again.";
      toast.error(message)
      set({ seedsData: null, error: message, isGeneratingSeeds: false });
    }
  },

  loginWithSeeds: async (seeds: string) => {
    set({ isLoading: true, error: null, requires2FA: false, tempSeeds: null });
    try {
      const seedsHash = await deriveSeedsHash(seeds);
      const payload = { pass_phrase: seedsHash.loginHash };
      const response = await authService.generateToken(payload);
      await handleSuccessfulLogin(response, seeds);
      const token = localStorage.getItem("access_token");
    
      if (token) {
        set({ isAuthenticated: true, isLoading: false, error: null });
        return true;
      } else {
        throw new Error("Token not saved correctly");
      }
    } catch (err: any) {
      const is2FARequired = 
        err.response?.status === 400 && 
        (err.response?.data?.totp_token || 
         (typeof err.response?.data === 'object' && 'totp_token' in err.response.data));

      if (is2FARequired) {
        set({ requires2FA: true, tempSeeds: seeds, isLoading: false });
        return false;
      }
      const message = err.response?.data?.message || err.response?.data?.[0] || err.response?.data?.non_field_errors?.[0] || "Login failed";
      set({ error: message, isLoading: false });
      return false;
    }
  },

  loginWithOTP: async (otp: string) => {
    const { tempSeeds } = get();
    if (!tempSeeds) {
      set({ error: "Session expired. Please try login again.", requires2FA: false });
      return false;
    }

    set({ isLoading: true, error: null });
    try {
      const seedsHash = await deriveSeedsHash(tempSeeds);
      const payload = { 
        pass_phrase: seedsHash.loginHash,
        totp_token: otp 
      };
      const response = await authService.generateToken(payload);
      await handleSuccessfulLogin(response, tempSeeds);
      set({ isAuthenticated: true, isLoading: false, requires2FA: false, tempSeeds: null });
      return true;
    } catch (err: any) {
      const message = err.response?.data?.message || err.response?.data?.[0] || "Invalid code";
      set({ error: message, isLoading: false });
      return false;
    }
  },

  checkAuth: async () => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("access_token");
    const cryptoData = localStorage.getItem("crypto_data");
    
    if (!token || !cryptoData) {
      set({ isAuthenticated: false });
      return;
    }
    if (isTokenExpired(token)) {
      try {
        await apiClient.get('/api/auth/token/refresh-cookie/');
        set({ isAuthenticated: true });
      } catch {
        set({ isAuthenticated: false });
        localStorage.clear();
      }
    } else {
      set({ isAuthenticated: true });
    }
  },
}));