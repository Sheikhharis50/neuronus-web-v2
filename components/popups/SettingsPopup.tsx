"use client";

import { Modal } from "../Modal";
import Button from "../Button";
import { useState, useEffect } from "react";
import { authService } from "@/services/auth-service";
import { toast } from "react-toastify";
import Image from "next/image";

const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

const FAIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ServerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const ToolsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const BoxIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#22c55e" />
    <path d="M7 12.5L10.5 16L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const QRIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-700">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPopup = ({ isOpen, onClose }: Props) => {
  const [is2faEnabled, setIs2faEnabled] = useState(false);
  const [showTotpSetup, setShowTotpSetup] = useState(false);
  const [totpData, setTotpData] = useState<{ secret: string; qr_code: string; uri: string } | null>(null);
  const [otpToken, setOtpToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisablingMode, setIsDisablingMode] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem("is_2fa");
      setIs2faEnabled(stored === "true");
    }
  }, [isOpen]);

  const handleStartTotpSetup = async () => {
    setIsLoading(true);
    try {
      const data = await authService.generateTotp();
      setTotpData(data);
      setIsDisablingMode(false);
      setShowTotpSetup(true);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to generate TOTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartDisable = () => {
    setIsDisablingMode(true);
    setShowTotpSetup(true);
  };

  const handleVerifyAndEnable = async () => {
    if (!otpToken) {
      toast.error("Please enter the OTP code");
      return;
    }
    setIsLoading(true);
    try {
      await authService.manageTotp(true, otpToken);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("is_2fa", "true");
      }
      setIs2faEnabled(true);
      setShowTotpSetup(false);
      setTotpData(null);
      setOtpToken("");
      toast.success("2-Step Verification enabled successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid OTP code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisable2fa = async () => {
    if (!otpToken) {
      toast.error("Please enter the OTP code");
      return;
    }
    setIsLoading(true);
    try {
      await authService.manageTotp(false, otpToken);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("is_2fa", "false");
      }
      setIs2faEnabled(false);
      setShowTotpSetup(false);
      setIsDisablingMode(false);
      setOtpToken("");
      toast.success("2-Step Verification disabled successfully");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid OTP code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSettings = () => {
    setShowTotpSetup(false);
    setIsDisablingMode(false);
    setTotpData(null);
    setOtpToken("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full max-w-[950px] p-0! flex flex-col md:flex-row min-h-[600px] overflow-hidden bg-white">
      {/* Sidebar Area */}
      <div className="w-full md:w-[280px] bg-[#F4F7FC] p-6 lg:p-8 flex flex-col border-r border-gray-100/50">
        <h2 className="text-2xl font-bold text-[#1F2346] mb-8">Settings</h2>

        <div className="flex flex-col space-y-3 grow">
          <button className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-900 rounded-xl transition-colors text-left w-full hover:bg-gray-100/50">
            <KeyIcon />
            <span className="font-medium text-[15px]">Seed Keys</span>
          </button>

          <Button
            text={
              <div className="flex items-center justify-start w-full gap-1">
                <FAIcon />
                <span className="font-medium text-[15px]">2 FA</span>
              </div>
            }
            className="w-full text-left! px-4! py-3! text-base! shadow-sm"
          />

          <button className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-900 rounded-xl transition-colors text-left w-full hover:bg-gray-100/50">
            <ServerIcon />
            <span className="font-medium text-[15px]">Server Location</span>
          </button>

          <button className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-900 rounded-xl transition-colors text-left w-full hover:bg-gray-100/50">
            <ToolsIcon />
            <span className="font-medium text-[15px]">Tools</span>
          </button>

          <button className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-900 rounded-xl transition-colors text-left w-full hover:bg-gray-100/50">
            <BoxIcon />
            <span className="font-medium text-[15px]">Subscriptions</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#F9FBFF] p-6 md:p-10 flex flex-col">
        <div className="w-full max-w-[550px] mx-auto mt-4">
          {!showTotpSetup ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-[#1F2346]">
                  <button className="hover:text-gray-900 transition-colors">
                    <ArrowLeft />
                  </button>
                  <h3 className="text-[22px] font-bold">2 Factor Authentications</h3>
                </div>
                {is2faEnabled && (
                  <button
                    onClick={handleStartDisable}
                    disabled={isLoading}
                    className={`text-[13px] font-medium text-gray-700 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Turn off 2-Step Verification
                  </button>
                )}
              </div>

              <p className="text-gray-600 text-[14px] mb-4 leading-relaxed max-w-[480px]">
                Prevent hackers from accessing your account with an additional layer of security.
              </p>
              <p className="text-gray-600 text-[14px] mb-10 leading-relaxed max-w-[480px]">
                Unless you're signing in with a passkey, you'll be asked to complete the most secure second step available on your account. You can update your second steps and sign-in options any time in your settings.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80">
                <h4 className="text-[18px] font-bold text-[#1F2346] mb-2">Second Steps</h4>
                <p className="text-gray-500 text-[13px] mb-8 leading-relaxed max-w-[450px]">
                  Make sure that you can access your Google Account by keeping this information up to date and adding more sign-in options
                </p>

                <div
                  onClick={!is2faEnabled ? handleStartTotpSetup : undefined}
                  className={`flex items-center justify-between group cursor-pointer hover:bg-gray-50/50 p-2 -mx-2 rounded-xl transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${is2faEnabled ? 'cursor-default' : ''}`}
                >
                  <div className="flex items-center">
                    <QRIcon />
                    <span className="text-gray-700 font-medium text-[15px]">Authenticator</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      {is2faEnabled ? (
                        <>
                          <CheckCircle />
                          <span className="text-[13px] text-gray-500 font-medium">Authenticator app added</span>
                        </>
                      ) : (
                        <span className="text-[13px] text-[#2F65FF] font-medium hover:underline">Add Authenticator app</span>
                      )}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-700 transition-colors">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100/80">
              <div className="flex items-center mb-6">
                <button onClick={handleBackToSettings} className="hover:text-gray-900 transition-colors">
                  <ArrowLeft />
                </button>
                <h3 className="text-[20px] font-bold ml-2">
                  {isDisablingMode ? "Disable 2-Step Verification" : "Set up Authenticator"}
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-gray-600 text-[14px] mb-6 text-center">
                  {isDisablingMode
                    ? "Enter the 6-digit code from your authenticator app to confirm you want to turn off 2-Step Verification."
                    : "Scan this QR code with your authenticator app (like Google Authenticator or Authy) to add your account."
                  }
                </p>

                {!isDisablingMode && totpData?.qr_code && (
                  <div className="bg-white p-4 border border-gray-200 rounded-xl mb-6 shadow-sm">
                    <Image
                      src={totpData.qr_code}
                      alt="QR Code"
                      width={200}
                      height={200}
                    />
                  </div>
                )}

                {!isDisablingMode && totpData?.secret && (
                  <div className="w-full max-w-[320px] mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secret Key (if QR code doesn't work)
                    </label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono break-all">
                        {totpData.secret}
                      </code>
                    </div>
                  </div>
                )}

                <div className="w-full max-w-[320px]">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter the 6-digit code
                  </label>
                  <input
                    type="text"
                    placeholder="000000"
                    maxLength={6}
                    value={otpToken}
                    onChange={(e) => setOtpToken(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F65FF] focus:border-transparent transition-all mb-6 text-center text-2xl tracking-[0.5em] font-mono"
                  />

                  <Button
                    text={isLoading ? "Verifying..." : (isDisablingMode ? "Verify and Disable" : "Verify and Enable")}
                    onClick={isDisablingMode ? handleDisable2fa : handleVerifyAndEnable}
                    disabled={isLoading || otpToken.length !== 6}
                    className={`w-full py-4 text-base font-bold shadow-md ${isDisablingMode ? 'bg-red-500 hover:bg-red-600!' : ''}`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
