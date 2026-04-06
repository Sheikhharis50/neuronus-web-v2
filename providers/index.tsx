"use client";

import { ReactNode, Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "./SidebarProvider";

export const AppContextsProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>{children}</SidebarProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
