import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Image from "next/image";
import Bg from "@/public/images/home/workspace/Documents-Bg.png";

const DocumentsCard = () => {
  return (
    <ThunderCard>
      <div className="absolute top-5 left-5">
        <SliderCardPill text="Documents" />
      </div>
      <div className="relative">
        <Image
          src={Bg}
          alt="Bg"
          width={1200}
          height={1000}
          className="w-110 h-auto pt-2 xl:pt-5"
        />
      </div>
    </ThunderCard>
  );
};

export default DocumentsCard;
