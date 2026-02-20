import { deriveSeedsHash, generateSeedPhrase, handleSuccessfulLogin, performSignup } from '@/lib/cryptoOperations';
import { authService } from '@/services/auth-service';
import { toast } from 'react-toastify';
import { create } from 'zustand';

type ModalType = 'loginSeeds' | 'seedsRegister' | 'selectRegistration' | 'createAccount' | 'freeAccount' | null;

interface AuthState {
  seedsData: any | null;
  error: any | null;
  activeModal: ModalType; 
  isLoading:boolean;
  isGeneratingSeeds: boolean,
  isAuthenticated: boolean;
  // Actions
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  // Api Actions
  handleRegister: (retry?: boolean) => Promise<void>;
  resetRegState: () => void;
  loginWithSeeds: (seeds: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  activeModal: null, 
  seedsData: null,
  error: null,
  isGeneratingSeeds:false,
  isLoading:false,
  isAuthenticated: false,

  openModal: (type) => set({ activeModal: type }),
  closeModal: () => set({ activeModal: null }),

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
      set({ seedsData:null, error: message, isGeneratingSeeds: false });
    }
  },

  loginWithSeeds: async (seeds: string) => {
    set({isLoading : true, error: null });
    try {
      const seedsHash = await deriveSeedsHash(seeds);
      const payload = { pass_phrase: seedsHash.loginHash };
      const response = await authService.generateToken(payload);
      await handleSuccessfulLogin(response, seeds);
      set({ isAuthenticated: true, isLoading: false });
      return true;
    } catch (err: any) {
      const message = err.response?.data?.message || "Login failed";
      set({ error: message, isLoading: false });
      return false; 
    }
  },
}));