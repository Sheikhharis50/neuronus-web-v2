import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Bg from "@/public/images/home/workspace/HighSecurityBg.png";
import Image from "next/image";

const HighSecurityCard = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="High Security Computer" className="my-5 mx-10" />
      <p className="font-bold text-3xl px-10 max-w-[90vh] xl:max-w-[55vh] my-5">
        No Hardware, No Hassle, Just Pure Speed.
      </p>

      <Image
        src={Bg}
        alt="PC"
        width={1200}
        height={1000}
        className="pt-2 w-127 h-auto"
      />
    </ThunderCard>
  );
};

export default HighSecurityCard;
