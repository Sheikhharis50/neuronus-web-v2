import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Image from "next/image";
import img from "@/public/images/home/Finance/Security-image.png";
import Badge from "@/public/images/home/Finance/Security-badges-image.png";

const CryptoCard = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Crypto Coin" className="mx-5 my-6" />
      <SliderCardPill
        text="Exchange"
        className="absolute top-18 left-11 bg-white rounded-xl!"
      />
      <SliderCardPill
        text="Swap"
        className="absolute top-8 right-12 bg-white rounded-xl!"
      />
      <SliderCardPill
        text="Cash by Mail"
        className="absolute bottom-24 left-12 rounded-xl! bg-white"
      />
      <SliderCardPill
        text="Cash in world point"
        className="absolute bottom-15 right-7 rounded-xl! bg-white"
      />
      <div className="flex justify-center py-10 sm:py-20 px-0 sm:px-10">
        <div className="rounded-full bg-white shadow-2xl size-[77%] p-9">
          <div className="rounded-full bg-white shadow-2xl p-8">
            <div className="rounded-full bg-white shadow-2xl p-6">
              <div className="rounded-full bg-white shadow-2xl p-2">
                <Image
                  src={img}
                  alt="Security Lock"
                  width={1200}
                  height={1000}
                  className=" translate-x-2 -translate-y-6 w-50 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Badge}
          alt="security badges"
          width={2000}
          height={2000}
          className="absolute bottom-12 left-6 sm:left-12 w-90 sm:w-100 h-auto"
        />
      </div>
    </ThunderCard>
  );
};

export default CryptoCard;
