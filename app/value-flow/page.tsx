import Image from "next/image";
import dots from "@/public/images/dots-header.png";
import brain from "@/public/images/header-brain.png";
import ProductValuationCard from "@/components/ProductValuationCard";
import { productValuationData } from "@/data/productValuation";
import Pool from "@/components/Pool";
import NeuroCoinWorth from "@/components/NeuroCoinWorth";

const ValueFlowPage = () => {
  return (
    <section className="bg-primary overflow-x-clip w-screen">
      <div className="relative">
        <Image
          src={brain}
          alt="brain"
          width={1000}
          height={1000}
          className="absolute lg:bottom-0 right-0 w-1/2 sm:w-1/3 mix-blend-screen object-cover"
        />
        <div className="container p-5 mx-auto relative pt-20 sm:pt-28 lg:pt-36 xl:pt-44 2xl:pt-52 pb-14 md:pb-20">
          <div className="w-1/2 rounded-full h-80 xl:h-100 2xl:h-120 bg-backlight blur-[80px] md:blur-[100px] absolute -top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Image
            src={dots}
            alt="dots"
            width={1500}
            height={400}
            className="w-full object-cover absolute top-0 left-0 hidden sm:block"
          />
          <Image
            src={dots}
            alt="dots"
            width={1500}
            height={400}
            className="w-full h-30 object-cover absolute top-0 left-0 sm:hidden"
          />
          <h1 className="text-[32px] sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-[#999999] via-white to-[#999999] mb-4 sm:mb-6 lg:mb-10 tracking-wide leading-tight sm:leading-none">
            How Your <br /> Neurons Generate <br /> Real Value
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[22px] text-white/70 text-center">
            Every transaction feeds the pool. Watch revenue flow from products
            to your token value.
          </p>
        </div>
      </div>
      <div className="container p-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-1.5 xs:gap-x-3 sm:gap-x-5 xl:gap-x-8 gap-y-12 xl:gap-y-14 pb-12 xs:pb-20 lg:pb-50">
        {productValuationData.map((product, index) => (
          <ProductValuationCard
            key={`${product.name}-valuation-${index}`}
            {...product}
          />
        ))}
      </div>
      <Pool />
      <NeuroCoinWorth />
    </section>
  );
};

export default ValueFlowPage;
