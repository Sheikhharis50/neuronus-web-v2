import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface ButtonProps {
  className?: string;
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  className = "",
  text,
  isLoading = false,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] py-2.5 md:py-3 lg:py-4 px-4 disabled:opacity-50 rounded-full bg-radial-[43.45%_44.45%_at_56.56%_20.66%,#2E3E99_0%,#4C67FF_100%,#4C67FF] cursor-pointer ${className}`}
    >
      {text}
      {isLoading && (
        <ThreeDots
          color="white"
          height={7}
          width={28}
          ariaLabel="loading"
        />
      )}
    </button>
  );
};

export default Button;
