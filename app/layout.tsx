import type { Metadata } from "next";
import "./globals.css";
import { AppContextsProvider } from "@/providers";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer 
          position="top-right"
          autoClose={4000}
          theme="colored"
        />
      </body>
    </html>
  );
}
