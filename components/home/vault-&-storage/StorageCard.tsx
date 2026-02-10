import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import PC from "@/public/images/home/vault/Storage-Pc.png";
import Image from "next/image";

const StorageCard = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Storage" className="mt-5 ml-8" />
      <Image
        src={PC}
        alt="bg"
        className="w-140 h-auto opacity-95 pl-10 pt-12 mb-4"
      />
    </ThunderCard>
  );
};

export default StorageCard;
