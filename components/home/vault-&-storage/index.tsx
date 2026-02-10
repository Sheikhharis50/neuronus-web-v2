"use client";
import Heading from "@/components/Heading";
import Description from "@/components/Description";
import Container from "@/components/Container";
import { vaultProducts } from "@/data/productCatalog";
import ProductCatalog from "@/components/ProductCatalog";
import AppSwiper from "@/components/Swipper";
import { SwiperSlide } from "swiper/react";
import StorageCard from "./StorageCard";
import ManagerCard from "./ManagerCard";
import Card1 from "./anonymous-notes/Card1";
import Card2 from "./anonymous-notes/Card2";

const Vault = () => {
  return (
    <Container className="pt-10 lg:pt-0 pb-16 md:pb-24 -mt-5">
      <Heading className="text-center mb-3">Vault & Storage</Heading>
      <Description
        className="text-center mb-10 md:mb-16"
        text="A secure safe for files and passwords."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex flex-col lg:justify-between mt-8 gap-14 lg:gap-0 pe-8">
          {vaultProducts.map((product) => (
            <ProductCatalog
              {...product}
              key={`access-network-product-${product.title}`}
            />
          ))}
        </div>
        <div>
          <AppSwiper>
            <SwiperSlide>
              <StorageCard />
            </SwiperSlide>
            <SwiperSlide>
              <ManagerCard />
            </SwiperSlide>
            <SwiperSlide>
              <Card1 />
            </SwiperSlide>
            <SwiperSlide>
              <Card2 />
            </SwiperSlide>
            <SwiperSlide>
              <p className="flex justify-center items-center text-4xl font-bold">
                Hide Assets Card is in progress
              </p>
            </SwiperSlide>
          </AppSwiper>
        </div>
      </div>
    </Container>
  );
};

export default Vault;
