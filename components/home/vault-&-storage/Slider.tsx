"use client";
import AppSwiper from "@/components/Swipper";
import StorageCard from "./StorageCard";
import { SwiperSlide } from "swiper/react";
import ManagerCard from "./ManagerCard";
import AnonymousNotes from "./anonymous-notes";
import HideAssets from "./hide-assets";

const Slider = () => {
  return (
    <AppSwiper spaceBetween={10} breakpoints={{ 640: { spaceBetween: 20 } }}>
      <SwiperSlide className="w-auto! h-auto! mb-10 ml-5 sm:ml-8 lg:ml-0">
        <StorageCard />
      </SwiperSlide>
      <SwiperSlide className="w-auto! h-auto! mb-10">
        <ManagerCard />
      </SwiperSlide>
      <SwiperSlide className="w-auto! h-auto! mb-10">
        <AnonymousNotes />
      </SwiperSlide>
      <SwiperSlide className="w-auto! h-auto! mb-10">
        <HideAssets />
      </SwiperSlide>
    </AppSwiper>
  );
};

export default Slider;
