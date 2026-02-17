import Container from "@/components/Container";
import FlowCard from "./FlowCard";
import CardButton from "./CardButton";
import ActivityLog from "./ActivityLog";
import { signupFlowActivityLogs } from "@/data/watch-demo/activity-log";
import ServerStorage from "./ServerStorage";

const SignupFlow = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16 lg:gap-5.25">
      <div className="space-y-3 lg:space-y-5">
        <FlowCard
          title="Sign up for Secure Account"
          description="Create your account. Server stores only encrypted data – no access to your keys or seed."
          placeholder="Paste your 16-word seed phrase here..."
          buttonText="Run Signup Flow"
          classes={{
            root: "bg-[#F1F6FE]! border border-[#4D67FF]",
            textarea: "bg-white!",
          }}
        />
        <FlowCard
          title="Login with Your Seed"
          description="Enter Your Seed Phrase:"
          placeholder="Paste your 16-word seed phrase here..."
          buttonText="Login to Account"
          classes={{ root: "border border-[#DCBAFF]" }}
        />
        <CardButton
          text="Decrypt Private Key"
          className="w-[90%] mx-auto lg:mx-0 block"
        />
      </div>
      <ActivityLog data={signupFlowActivityLogs} title="signup-flow" />
      <ServerStorage />
    </Container>
  );
};

export default SignupFlow;
