import Image from "next/image";
import SliderCardPill from "@/components/SliderCardPill";
import hand from "@/public/images/home/access-network-mobile.png";
import Power from "@/public/icons/home/accessNetork/Power";
import bg from "@/public/images/home/header-card-bg-mob.png";
import ThunderCard from "@/components/ThunderCardBg";

const NeuroSPNCard = () => {
  return (
    <ThunderCard>
      <div className="absolute top-[6%] right-[5%] size-40 xxs:size-45 sm:size-50 2xl:size-56 rounded-full border border-[#2854FF]/10 flex items-center justify-center z-1">
        <div className="size-[85%] rounded-full border border-[#2058FF]/50 flex items-center justify-center">
          <div className="size-[85%] rounded-full bg-linear-to-b from-[#6A96FF] to-[#185BFF] flex items-center justify-center">
            <div className="bg-white rounded-full size-[85%] text-center flex flex-col items-center justify-center gap-0.5 text-[10px] sm:text-xs">
              <Power className="w-5 sm:w-7 2xl:w-9 h-auto mb-0.5" />
              <p className="text-[#778AA6]">Your IP</p>
              <p className="font-semibold">506.457.14.512</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={bg}
        alt="brain bg"
        width={800}
        height={1000}
        className="size-full object-cover absolute top-0 left-0"
      />
      <SliderCardPill text="SPN" className="m-6.5" />
      <div className="relative">
        <video
          loop
          muted
          playsInline
          autoPlay
          className="absolute w-full h-1/2 left-0 top-1/2 -translate-y-1/2 object-cover mix-blend-plus-lighter"
        >
          <source src="/videos/globe.mp4" type="video/mp4" />
        </video>
        <Image
          src={hand}
          alt="mobile in hand"
          width={800}
          height={1000}
          className="relative pl-5 sm:pl-15 pt-38 sm:pt-30 w-74 xxs:w-85 sm:w-114 2xl:w-127 h-auto object-cover"
        />
      </div>
    </ThunderCard>
  );
};

export default NeuroSPNCard;
