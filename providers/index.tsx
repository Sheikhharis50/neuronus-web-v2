"use client";
import { ReactNode, Suspense } from "react";
import { SidebarProvider } from "./SidebarProvider";

export const AppContextsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <SidebarProvider>{children}</SidebarProvider>
    </Suspense>
  );
};
