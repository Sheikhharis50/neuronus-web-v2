import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classes?: {
    root?: string;
  };
  white?: boolean;
  loading?: boolean;
}

const Button = ({
  text,
  className = "",
  classes,
  onClick,

  white = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${className} text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] py-2.5 md:py-3 lg:py-4 px-4 rounded-full cursor-pointer  ${white ? "bg-white text-black " : " text-white bg-radial-[43.45%_44.45%_at_56.56%_20.66%,#2E3E99_0%,#4C67FF_100%,#4C67FF] "}`}
    >
      {text}
    </button>
  );
};

export default Button;
