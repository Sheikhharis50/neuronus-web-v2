import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import Navbar from "./navbar";
import dots from "@/public/images/dots-header.png";
import dotsMobile from "@/public/images/dots-header-mobile.png";
import brainRight from "@/public/images/header-brain.png";
import brainLeft from "@/public/images/header-brain-left.png";
import BottomEllipse from "@/public/images/BottomEllipse";

interface HeaderProps {
  title: React.ReactNode;
  subTitle?: { text: string; icon?: React.ElementType };
  description: string | React.ReactNode;
  children?: React.ReactNode;
  classes?: {
    container?: string;
    root?: string;
    desc?: string;
    rightImg?: string;
    leftImg?: string;
  };
  rightImg?: { src: string | StaticImageData; alt: string };
}

const Header = ({
  description,
  title,
  subTitle,
  children = null,
  classes = {},
  rightImg = { src: brainRight, alt: "brain" },
}: HeaderProps) => {
  return (
    <>
      <header
        className={`relative bg-primary overflow-hidden ${classes.root || ""}`}
      >
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
          src={rightImg.src}
          alt={rightImg.alt}
          width={1000}
          height={1000}
          className={`absolute top-1/2 lg:top-0 right-0 w-2/3 md:w-1/2 lg:w-1/3 mix-blend-screen object-contain ${
            classes.rightImg || ""
          }`}
        />
        <Image
          src={brainLeft}
          alt="brain"
          width={1000}
          height={1000}
          className={`absolute top-0 left-0 w-1/3 md:w-1/5 lg:w-[13%] mix-blend-screen object-contain ${
            classes.leftImg || ""
          }`}
        />
        <Container className={`relative ${classes.container || ""}`}>
          <Navbar />
          <div className="relative pt-16 md:pt-20 lg:pt-30">
            {subTitle?.text && (
              <h3 className="text-[10px] lg:text-xs xl:text-sm text-white w-fit mx-auto flex items-center gap-1.25 xl:gap-2 border-white bg-white/18 backdrop-blur-[1.8px] rounded-full py-1 xl:py-1.5 px-2.5 xl:px-4 border-[0.9px] mb-3 xl:mb-5">
                {subTitle?.icon && (
                  <subTitle.icon className="w-4 xl:w-6 h-auto" />
                )}{" "}
                {subTitle?.text}
              </h3>
            )}

            <h1 className="text-[32px] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mb-4 md:mb-6 xl:mb-10 gradient-text">
              {title}
            </h1>
            <p
              className={`text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-white/70 text-center ${
                classes.desc || ""
              }`}
            >
              {description}
            </p>
            {children}
          </div>
        </Container>
      </header>
      <BottomEllipse className="-translate-y-1" />
    </>
  );
};

export default Header;
