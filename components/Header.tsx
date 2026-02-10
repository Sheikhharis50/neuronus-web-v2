import Image from "next/image";
import Container from "./Container";
import Navbar from "./navbar";
import dots from "@/public/images/dots-header.png";
import dotsMobile from "@/public/images/dots-header-mobile.png";
import brainRight from "@/public/images/header-brain.png";
import brainLeft from "@/public/images/header-brain-left.png";

interface HeaderProps {
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}

const Header = ({ description, title, children = null }: HeaderProps) => {
  return (
    <>
      <header className="relative bg-primary overflow-hidden">
        <div className="w-1/2 h-80 md:h-100 lg:h-120 rounded-b-full bg-backlight blur-[80px] md:blur-[100px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Image
          src={dots}
          alt="dots"
          className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:block"
        />
        <Image
          src={dotsMobile}
          alt="dots"
          className="absolute top-0 left-1/2 -translate-x-1/2 md:hidden"
        />
        <Image
          src={brainRight}
          alt="brain"
          width={1000}
          height={1000}
          className="absolute top-1/2 lg:top-0 right-0 w-2/3 md:w-1/2 lg:w-1/3 mix-blend-screen object-contain"
        />
        <Image
          src={brainLeft}
          alt="brain"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-1/3 md:w-1/5 lg:w-[13%] mix-blend-screen object-contain"
        />
        <Container className="relative">
          <Navbar />
          <div className="relative pt-16 md:pt-20 lg:pt-30">
            <h1 className="text-[32px] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mb-4 md:mb-6 xl:mb-10 gradient-text">
              {title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-white/70 text-center">
              {description}
            </p>
            {children}
          </div>
        </Container>
        <div className="h-12 md:h-16 lg:h-20 w-[105%] translate-x-[-2.5%] bg-slate rounded-[50%/100px_100px_0_0]" />
      </header>
    </>
  );
};

export default Header;
