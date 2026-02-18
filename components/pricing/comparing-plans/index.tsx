"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import TabSwitcher from "@/components/TabSwitcher";
import { useState } from "react";
import ComparisionTable from "../ComparisionTable";
import { plans } from "@/data/Comparision";
import Features from "../features";

const Comparing = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  return (
    <Container className="py-10 sm:py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
        <Heading>Compare All Plans</Heading>

        <TabSwitcher
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
          value={activeTab}
          onChange={(value: string) =>
            setActiveTab(value as "monthly" | "yearly")
          }
        />
      </div>

      {/* Table */}
      <div className="mt-10 overflow-x-auto">
        <ComparisionTable annual={activeTab === "yearly"} plans={plans} />
      </div>
      <Features />
    </Container>
  );
};

export default Comparing;
