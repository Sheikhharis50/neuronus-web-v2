"use client";
import { useState } from "react";
import TabSwitcher from "../TabSwitcher";
import { subscriptionCardsDataMonthly } from "@/data/subscription";
import Container from "../Container";
import SubscriptionCard from "./SubscriptionCard";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <Container className="py-10 lg:py-40">
      <TabSwitcher
        options={[
          { label: "Monthly", value: "monthly" },
          { label: "Yearly", value: "yearly" },
        ]}
        value={activeTab}
        onChange={setActiveTab}
        className="mx-auto"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-10 md:gap-6 items-stretch">
        {subscriptionCardsDataMonthly.map((data) => (
          <SubscriptionCard
            annual={activeTab !== "monthly"}
            key={`${data.title}`}
            {...data}
          />
        ))}
      </div>
    </Container>
  );
};

export default Subscription;
