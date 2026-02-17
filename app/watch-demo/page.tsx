import PoweredByNuronus from "@/components/home/PoweredByNuronus";
import Encryption from "@/components/watch-demo/encryption";
import FAQ from "@/components/watch-demo/faq";
import HeaderWatchDemo from "@/components/watch-demo/Header";
import TechnicalArchitecture from "@/components/watch-demo/technicalArchitecture";
import Transparency from "@/components/watch-demo/transparency";
import UnderstandingTech from "@/components/watch-demo/understanding-tech";

export default function Page() {
  return (
    <>
      <HeaderWatchDemo />
      <Encryption />
      <UnderstandingTech />
      <TechnicalArchitecture />
      <Transparency />
      <FAQ />
      <PoweredByNuronus />
    </>
  );
}
