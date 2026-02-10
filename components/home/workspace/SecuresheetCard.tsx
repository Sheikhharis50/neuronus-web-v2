import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Image from "next/image";
import Bg from "@/public/images/home/workspace/Securesheet-bg.png";

const SecuresheetCard = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Secure Sheet" className="my-5 mx-10" />
      <Image
        src={Bg}
        alt="Excel"
        width={1200}
        height={1000}
        className="object-cover pt-5 w-108 h-auto"
      />
    </ThunderCard>
  );
};

export default SecuresheetCard;
