import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className = "", text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] py-2.5 md:py-3 lg:py-4 px-4 rounded-full bg-radial-[43.45%_44.45%_at_56.56%_20.66%,#2E3E99_0%,#4C67FF_100%,#4C67FF] cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
