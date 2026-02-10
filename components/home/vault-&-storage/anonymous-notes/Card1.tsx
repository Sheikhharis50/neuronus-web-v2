import SliderCardPill from "@/components/SliderCardPill";
import ThunderCard from "@/components/ThunderCardBg";
import Browse from "@/public/icons/home/vault/Browse";
import Clock from "@/public/icons/home/vault/Clock";
import Enter from "@/public/icons/home/vault/Enter";
import Ip from "@/public/icons/home/vault/Ip";
import Lock from "@/public/icons/home/vault/Lock";
import Views from "@/public/icons/home/vault/Views";
import React from "react";

const Card1 = () => {
  return (
    <ThunderCard>
      <SliderCardPill text="Anonymous Notes" className=" mt-5 ml-8" />
      <div className="pl-8 pt-10 font-semibold text-3xl">
        <p>Share Anything, Then It</p>
        <p>Disappears</p>
      </div>
      <div className="mt-10 px-9 py-5">
        <div className="bg-white opacity-95 rounded-[25px] p-5">
          <div>
            <textarea
              placeholder="Write your Secret note..."
              className="w-100 border border-[#B7B7B7] resize-none rounded-[25px] placeholder:text-black outline-none p-5"
              rows={7}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center mt-5 gap-4 text-[13px]">
                <Browse />
                <p>Upload</p>
              </div>
              <div className="flex items-center mt-5 gap-4">
                <Enter />
                <p className="text-[13px]">Press Enter to send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="bg-white rounded-[100px] translate-x-4">
          <div className="py-2.75 px-3.25 text-[14px] flex items-center gap-2">
            <Clock />
            <p>LifeTime</p>
          </div>
        </div>
        <div className="bg-white rounded-[100px] -translate-x-45">
          <div className="py-2.75 px-3.25 text-[14px] flex items-center gap-2">
            <Lock />
            <p>Password</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 mb-8">
        <div className="bg-white rounded-[100px] translate-x-28">
          <div className="py-2.75 px-3.25 text-[14px] flex items-center gap-2">
            <Views />
            <p>Max Views</p>
          </div>
        </div>
        <div className="bg-white rounded-[100px] -translate-x-5">
          <div className="py-2.75 px-3.25 text-[14px] flex items-center gap-2">
            <Ip />
            <p>IP Restrictions</p>
          </div>
        </div>
      </div>
    </ThunderCard>
  );
};

export default Card1;
