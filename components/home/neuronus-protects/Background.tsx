import AvifImage from "@/components/AvifImage";
import { homeAvifImages } from "@/data/homeAvifImages";

const Background = () => {
  return (
    <>
      <AvifImage
        src={homeAvifImages.protectsBg}
        alt="coins bg"
        width={1500}
        height={1800}
        className="w-full h-180 xs:h-190 sm:h-200 md:h-210 lg:h-240 xl:h-250 2xl:h-260 object-cover"
      />
      <div className="relative">
        <AvifImage
          src={homeAvifImages.protectsEllipse}
          alt="ellipse bg"
          width={1500}
          height={500}
          className="w-full h-auto object-cover -translate-y-[25%]"
        />
      </div>
      <div className="absolute w-full h-12.5 bg-[linear-gradient(90deg,#01123F_45.07%,#00328E_87.9%)] left-0 -top-6.25 blur-[10px]" />
    </>
  );
};

export default Background;
