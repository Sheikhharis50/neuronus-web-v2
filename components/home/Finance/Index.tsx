"use client";
import { SwiperSlide } from "swiper/react";
import AppSwiper from "../../Swipper";
import Heading from "@/components/Heading";
import Description from "@/components/Description";
import Container from "@/components/Container";
import { FinanceProducts } from "@/data/productCatalog";
import ProductCatalog from "@/components/ProductCatalog";
import CryptoCard from "./CryptoCard";
import PayCard from "./PayCard";

const Finance = () => {
  return (
    <Container className="pt-10 lg:pt-0 pb-16 md:pb-24 -mt-5">
      <Heading className="text-center mb-3">Finance</Heading>
      <Description
        className="text-center mb-10 md:mb-16"
        text="The ecosystem’s bloodstream."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex flex-col lg:justify-center mt-8 gap-14 lg:gap-5 pe-8">
          {FinanceProducts.map((product) => (
            <ProductCatalog
              {...product}
              key={`finance-product-${product.title}`}
            />
          ))}
        </div>
        <div>
          <AppSwiper>
            <SwiperSlide>
              <CryptoCard />
            </SwiperSlide>
            <SwiperSlide>
              <PayCard />
            </SwiperSlide>
          </AppSwiper>
        </div>
      </div>
    </Container>
  );
};

export default Finance;
