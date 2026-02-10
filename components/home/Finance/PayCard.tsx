import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Image from "next/image";
import SS from "@/public/images/home/Finance/Pay-Bg.png";
import footer from "@/public/images/home/Finance/Pay-footer.png";

const PayCard = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Pay" className="mt-5 mx-5" />
      <p className="text-[30px] font-semibold text-center my-0 sm:my-3">
        Anonymous Payment
      </p>
      <Image
        src={SS}
        alt="Payment SS"
        className="-translate-x-3.5 w-85 sm:w-100 h-auto"
      />
      <Image src={footer} alt="vaulet" className="w-90 sm:w-100 h-auto my-4" />
    </ThunderCard>
  );
};

export default PayCard;
