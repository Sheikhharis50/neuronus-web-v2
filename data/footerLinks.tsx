import Image from "next/image";
import LinkedIn from "@/public/icons/footer/LinkedIn";
import Mastodon from "@/public/icons/footer/Mastodon";
import P from "@/public/icons/footer/P";
import X from "@/public/icons/footer/X";
import Youtube from "@/public/icons/footer/Youtube";
import sandbox from "@/public/icons/footer/code-sand-box.png";

const company = [
  { name: "Home", url: "" },
  { name: "About", url: "" },
  { name: "Development", url: "" },
  { name: "Products", url: "" },
  { name: "Read Books", url: "" },
  { name: "Blog", url: "" },
  { name: "Contact", url: "" },
  { name: "LLM Prompt", url: "" },
  { name: "Comunity Ideas & Voting", url: "" },
  { name: "Try on .Onion", url: "" },
];

const communication = [
  { name: "Neuro Mail", url: "" },
  { name: "Resonance", url: "" },
  { name: "Ghost Transfer", url: "" },
];

const security = [
  { name: "Neuro RSA", url: "" },
  { name: "Neuro SPN", url: "" },
];

const finance = [
  { name: "Neuro Coin", url: "" },
  { name: "NeuroPay", url: "" },
];

const storage = [
  { name: "Neuro Drive", url: "" },
  { name: "Quantumography", url: "" },
];

const socialIcons = [
  { icon: <LinkedIn className="w-full h-auto" />, url: "" },
  { icon: <Youtube className="w-full h-auto" />, url: "" },
  { icon: <X className="w-full h-auto" />, url: "" },
  { icon: <Mastodon className="w-full h-auto" />, url: "" },
  {
    icon: <Image src={sandbox} alt="code sand box" className="w-full h-auto" />,
    url: "",
  },
  { icon: <P className="w-full h-auto" />, url: "" },
];

export { communication, company, finance, security, socialIcons, storage };
