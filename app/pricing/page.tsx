import Header from "@/components/Header";

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
        classes={{ descClass: "pb-40" }}
      />
    </>
  );
};

export default PricingPage;
