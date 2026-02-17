import Container from "@/components/Container";
import FlowCard from "./FlowCard";
import ActivityLog from "./ActivityLog";
import { encryptMessagectivityLogs } from "@/data/watch-demo/activity-log";
import ServerStorage from "./ServerStorage";

const EncryptMessage = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-16 lg:gap-5.25">
      <div className="space-y-3 lg:space-y-5">
        <FlowCard
          buttonText="Encrypt & Store"
          description="Write a message and encrypt it using your public key. Only your
            private key can decrypt it."
          placeholder="Type your secret message here..."
          title="Encrypt message"
          clearButton
        />
        <FlowCard
          buttonText="Decrypt Message"
          description="Paste any encrypted message to decrypt it."
          placeholder="Type your secret message here..."
          title="Decrypt Custom Message"
          clearButton
        />
      </div>
      <ActivityLog data={encryptMessagectivityLogs} title="encrypt-message" />
      <ServerStorage />
    </Container>
  );
};

export default EncryptMessage;
