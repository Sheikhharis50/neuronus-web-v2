import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Latop from "@/public/images/home/vault/Manager-Laptop.png";
import Image from "next/image";

const ManagerCard = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Manager" className="mt-5 ml-8" />
      <Image
        src={Latop}
        alt="bg"
        className="w-133.5 h-auto opacity-95 pl-10 pt-8 mb-4"
      />
    </ThunderCard>
  );
};

export default ManagerCard;
