import Header from "@/components/Header";
import BasicRules from "@/components/home/basic-rules";
import Subscription from "@/components/pricing";
import Comparing from "@/components/pricing/comparing-plans";
import FreedomPlan from "@/components/pricing/freedom-plan";

const PricingPage = () => {
  return (
    <>
      <Header
        title={
          <span>
            Choose Your <br /> Neuronus Computing <br /> Privacy Plan
          </span>
        }
        description="Encrypted tools that protect your identity. Your online life stays hidden — safe, private, and in your control."
        classes={{ desc: "pb-40" }}
      />
      <Subscription />
      <FreedomPlan />
      <Comparing />
      <BasicRules paymentSection={true} />
    </>
  );
};

export default PricingPage;
