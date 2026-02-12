"use client";
import Description from "@/components/Description";
import Heading from "@/components/Heading";
import EncryptMessage from "./encrypt-message";
import Signup from "./signup-flow";
import { useState } from "react";
import Container from "@/components/Container";

const Encryption = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const signupTab = activeTab === "signup";

  return (
    <Container className="py-10 md:py-20">
      <Heading className="text-center">See Encryption in Real-Time</Heading>
      <Description
        text="Watch how your data transforms from readable text to encrypted ciphertext, all within your browser."
        className="text-black text-center  w-[95%] sm:w-[90%] lg:w-1/2 mx-auto"
      />

      <div className="my-5 sm:my-8 bg-radial-[43.45%_44.45%_at_56.56%_20.66%,#2E3E99_0%,#4C67FF_100%,#4C67FF] text-sm sm:text-[18px] font-semibold text-white w-fit mx-auto p-1 rounded-full">
        <button
          className={`py-2 sm:py-4 px-5 sm:px-10 rounded-full cursor-pointer ${signupTab ? "bg-white text-black" : ""}`}
          onClick={() => setActiveTab("signup")}
        >
          Signup Flow
        </button>
        <button
          className={`py-2 sm:py-4 px-5 sm:px-10 rounded-full cursor-pointer ${signupTab ? "" : "bg-white text-black"}`}
          onClick={() => setActiveTab("encrypt")}
        >
          Encrypt message
        </button>
      </div>

      <div className="mt-4 sm:mt-8">
        {signupTab ? <Signup /> : <EncryptMessage />}
      </div>
    </Container>
  );
};

export default Encryption;
