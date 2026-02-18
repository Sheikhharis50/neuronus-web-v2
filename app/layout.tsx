import type { Metadata } from "next";
import "./globals.css";
import { AppContextsProvider } from "@/providers";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Neuronus",
  description: "Neuronus Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppContextsProvider>
          {children}
          <Footer />
          <Sidebar />
        </AppContextsProvider>
      </body>
    </html>
  );
}
