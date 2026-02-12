import ScrollUp from "@/public/icons/watch-demo/signupFlow/ScrollUp";

interface KeyCardProps {
  title: string;
  label: string;
}
const KeyCard = ({ title, label }: KeyCardProps) => {
  return (
    <div className="bg-white rounded-[7.017px] border border-[#D8D8D8] px-7 py-5.5 mt-3.25">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[12.836px] xs:text-[16.372px]">
          {title}
        </p>
        <div className="flex items-center gap-3.5">
          <button className="bg-[#EDEEF1] rounded-[3.25px] text-[8px] sm:text-[10.525px] px-4 py-0.5">
            {label}
          </button>
          <ScrollUp className="size-2.75 sm:size-3.5" />
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
