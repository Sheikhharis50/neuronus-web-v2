"use client";
import { ReactNode, Suspense } from "react";
import { SidebarProvider } from "./SidebarProvider";
import { CreateAccountPopup } from "@/components/popups/CreateAccount";
import { LoginSeeds } from "@/components/popups/LoginSeeds";
import { useAuthStore } from "@/store/useAuthStore";
import { FreeAccount } from "@/components/popups/FreeAccount";
import { SeedsRegistration } from "@/components/popups/SeedsRegistration";
import { SelectRegistration } from "@/components/popups/SelectReagistration";
import { SettingsPopup } from "@/components/popups/SettingsPopup";

export const AppContextsProvider = ({ children }: { children: ReactNode }) => {
  const activeModal = useAuthStore((state) => state.activeModal);
  const closeModal = useAuthStore((state) => state.closeModal);

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
      {activeModal === "settings" && (
        <SettingsPopup isOpen={true} onClose={closeModal} />
      )}
    </Suspense>
  );
};
