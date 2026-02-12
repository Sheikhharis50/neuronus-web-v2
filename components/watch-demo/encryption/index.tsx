"use client";
import Description from "@/components/Description";
import Heading from "@/components/Heading";
import EncryptMessage from "./encrypt-message";
import Signup from "./signup-flow";
import { useState } from "react";
import Container from "@/components/Container";
import TabSwitcher from "@/components/TabSwitcher";

const Encryption = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <Container className="py-10 md:py-20">
      <Heading className="text-center">See Encryption in Real-Time</Heading>
      <Description
        text="Watch how your data transforms from readable text to encrypted ciphertext, all within your browser."
        className="text-black text-center  w-[95%] sm:w-[90%] lg:w-1/2 mx-auto"
      />

      <TabSwitcher
        options={[
          { label: "Signup Flow", value: "signup" },
          { label: "Encrypt Message", value: "encrypt" },
        ]}
        value={activeTab}
        onChange={setActiveTab}
      />
      <div className="mt-4 sm:mt-8">
        {activeTab === "signup" ? <Signup /> : <EncryptMessage />}
      </div>
    </Container>
  );
};

export default Encryption;
