interface DescriptionProps {
  className?: string;
  text: string;
  white?: boolean;
}

const Description = ({
  text,
  className = "",
  white = false,
}: DescriptionProps) => {
  return (
    <p
      className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] ${
        white ? "text-white/70" : "text-black/70"
      } ${className}`}
    >
      {text}
    </p>
  );
};

export default Description;
