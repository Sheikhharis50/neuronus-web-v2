import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Copy from "@/public/icons/Copy";
import UrlLink from "@/public/icons/home/vault/UrlLink";
import Image from "next/image";
const Card2 = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Anonymous Notes" className="mt-5 ml-8" />
      <div className="pl-8 pt-10 font-semibold text-3xl">
        <p>Share Anything, Then It</p>
        <p>Disappears</p>
      </div>
      <div className="mt-5 pl-8 pr-10 pb-11">
        <div className="flex items-center gap-3 pb-2.5">
          <p className="font-normal text-[18px]">Your secret URl</p>
          <UrlLink />
        </div>
        <div className="bg-white flex rounded-xl justify-between items-center shadow-2xl">
          <input
            readOnly
            type="text"
            defaultValue="www.gtransfer.io/AzSop"
            className="w-100 font-normal outline-none p-5"
          />
          <Copy className="pr-5 size-10 text-[#B1B1B1] h-auto" />
        </div>
      </div>
      <div className="mt-6 translate-x-[15%] -translate-y-5 pb-4">
        <div className="inline-flex rounded-full bg-white shadow-2xl p-8">
          <div className="inline-flex rounded-full bg-white shadow-2xl p-7">
            <div className="inline-flex rounded-full bg-white shadow-2xl p-6">
              <div className="inline-flex rounded-full bg-white shadow-2xl p-3">
                <Image
                  src="/videos/Notes-Arrow-gif.gif"
                  alt="Arrow animation"
                  unoptimized
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/videos/Bunny-gif.gif"
        alt="Arrow animation"
        unoptimized
        width={200}
        height={200}
        className="absolute bottom-0 right-0 translate-y-3 size-37.5"
      />
    </ThunderCard>
  );
};

export default Card2;
