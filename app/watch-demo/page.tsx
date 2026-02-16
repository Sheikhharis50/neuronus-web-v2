import Encryption from "@/components/watch-demo/encryption";
import FAQ from "@/components/watch-demo/faq";
import HeaderWatchDemo from "@/components/watch-demo/Header";
import TechnicalArchitecture from "@/components/watch-demo/technicalArchitecture";
import Transparency from "@/components/watch-demo/transparency";

export default function Page() {
  return (
    <>
      <HeaderWatchDemo />
      <Encryption />
      <TechnicalArchitecture />
      <Transparency />
      <FAQ />
    </>
  );
}
