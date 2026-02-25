"use client";
import { ReactNode, Suspense, useEffect } from "react";
import { SidebarProvider } from "./SidebarProvider";
import { CreateAccountPopup } from "@/components/popups/CreateAccount";
import { LoginSeeds } from "@/components/popups/LoginSeeds";
import { useAuthStore } from "@/store/useAuthStore";
import { FreeAccount } from "@/components/popups/FreeAccount";
import { SeedsRegistration } from "@/components/popups/SeedsRegistration";
import { SelectRegistration } from "@/components/popups/SelectReagistration";
import { useSearchParams } from "next/navigation";

export const AppContextsProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const activeModal = useAuthStore((state) => state.activeModal);
  const closeModal = useAuthStore((state) => state.closeModal);
  const openModal = useAuthStore((state) => state.openModal);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
console.log(isAuthenticated)
  useEffect(() => {
    const shouldOpenLogin = searchParams.get("openLogin") === "true";
    const callback = searchParams.get("callback");

    if (shouldOpenLogin && !isAuthenticated) {
      openModal("loginSeeds");
    }
    if (isAuthenticated && callback) {
      window.location.href = callback;
    }
  }, [searchParams, isAuthenticated, openModal]);

  return (
    <Suspense>
      <SidebarProvider>{children}</SidebarProvider>

      {activeModal === "createAccount" && (
        <CreateAccountPopup isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "freeAccount" && (
        <FreeAccount isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "loginSeeds" && (
        <LoginSeeds isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "seedsRegister" && (
        <SeedsRegistration isOpen={true} onClose={closeModal} />
      )}
      {activeModal === "selectRegistration" && (
        <SelectRegistration isOpen={true} onClose={closeModal} />
      )}
    </Suspense>
  );
};
