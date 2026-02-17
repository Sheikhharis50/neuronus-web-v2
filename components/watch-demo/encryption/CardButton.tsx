import Button from "@/components/Button";

interface CardButtonProps {
  text: string;
  className?: string;
}

const CardButton = ({ text, className = "" }: CardButtonProps) => {
  return (
    <Button
      text={text}
      className={`text-[11px]! lg:text-[13px]! 2xl:text-[15px]! py-2! md:py-2.5! lg:py-3! ${className}`}
    />
  );
};

export default CardButton;
