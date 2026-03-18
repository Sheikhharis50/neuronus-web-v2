"use client";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { SidebarProvider } from "./SidebarProvider";
import { CreateAccountPopup } from "@/components/popups/CreateAccount";
import { LoginSeeds } from "@/components/popups/LoginSeeds";
import { useAuthStore } from "@/store/useAuthStore";
import { FreeAccount } from "@/components/popups/FreeAccount";
import { SeedsRegistration } from "@/components/popups/SeedsRegistration";
import { SelectRegistration } from "@/components/popups/SelectReagistration";
import { SettingsPopup } from "@/components/popups/SettingsPopup";
import { useSearchParams } from "next/navigation";
import RegisteredToolsPopup from "@/components/popups/RegisteredToolsPopup";

const AppContextsInner = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const activeModal = useAuthStore((state) => state.activeModal);
  const closeModal = useAuthStore((state) => state.closeModal);
  const openModal = useAuthStore((state) => state.openModal);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const [showTools, setShowTools] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    const shouldOpenLogin = searchParams.get("openLogin") === "true";
    const callback = searchParams.get("callback");

    if (shouldOpenLogin && !isAuthenticated) {
      openModal("loginSeeds");
    }
    if (isAuthenticated && callback) {
      const token = localStorage.getItem("access_token");
      const cryptoData = localStorage.getItem("crypto_data") || "";
      const encKey = localStorage.getItem("encryption-key") || "";

      window.location.href = `${callback}#access_token=${token}&crypto_data=${encodeURIComponent(cryptoData)}&encryption_key=${encodeURIComponent(encKey)}`;
    }
  }, [searchParams, isAuthenticated, openModal]);

  return (
    <>
      <SidebarProvider>{children}</SidebarProvider>

      {activeModal === "createAccount" && (
        <CreateAccountPopup isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "freeAccount" && (
        <FreeAccount isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "loginSeeds" && (
        <LoginSeeds isOpen={true} onClose={closeModal}  openTools={()=>setShowTools(true)} />
      )}
      {activeModal === "seedsRegister" && (
        <SeedsRegistration isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "selectRegistration" && (
        <SelectRegistration isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "settings" && (
        <SettingsPopup isOpen={true} onClose={closeModal} />
      )}
      {showTools && (
        <RegisteredToolsPopup isOpen={showTools} onClose={()=>setShowTools(false)} />
      )}
    </>
  );
};

export const AppContextsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={null}>
      <AppContextsInner>{children}</AppContextsInner>
    </Suspense>
  );
};
