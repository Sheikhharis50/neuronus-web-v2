import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardButton from "./CardButton";

interface FlowCardProps {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  clearButton?: boolean;
  classes?: { root?: string; textarea?: string };
}

const FlowCard = ({
  buttonText,
  description,
  placeholder,
  title,
  clearButton = false,
  classes = {},
}: FlowCardProps) => {
  return (
    <div
      className={`bg-white rounded-[9.7px] py-3 px-2.5 lg:py-5 lg:px-4 2xl:py-7 2xl:px-6 space-y-2 lg:space-y-3 2xl:space-y-4 ${
        classes.root || ""
      }`}
    >
      <CardTitle text={title} />
      <CardDescription text={description} />
      <textarea
        className={`w-full h-24 lg:h-28 xl:h-32 2xl:h-36 bg-slate/55 border border-[#D4D4D4] py-2 px-3 lg:py-2.5 lg:px-4 2xl:py-2.75 2xl:px-4.25 resize-none rounded-lg placeholder:text-black/40 placeholder:text-[10px] placeholder:lg:text-xs placeholder:2xl:text-sm ${classes.textarea}`}
        placeholder={placeholder}
      />
      <div className="flex items-center gap-2">
        <CardButton text={buttonText} className="max-w-50 lg:max-w-63 flex-1" />
        <button
          className={`text-[11px] lg:text-[13px] 2xl:text-[15px] py-2 md:py-2.5 lg:py-3 text-black/44 me-1 lg:me-2 2xl:me-3 px-3 lg:px-4 2xl:px-6 ${
            clearButton ? "" : "invisible"
          }`}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FlowCard;
