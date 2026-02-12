import Encryption from "@/components/watch-demo/encryption";
import FAQ from "@/components/watch-demo/faq";
import TechnicalArchitecture from "@/components/watch-demo/technicalArchitecture";
import Transparency from "@/components/watch-demo/transparency";

export default function Page() {
  return (
    <div>
      <Encryption />
      <TechnicalArchitecture />
      <Transparency />
      <FAQ />
    </div>
  );
}
