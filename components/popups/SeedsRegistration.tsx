import Seed from "@/public/icons/seedRegistration/Seed";
import { Modal } from "../Modal";
import Link from "next/link";
import Copy from "@/public/icons/Copy";
import Save from "@/public/icons/Save";
import Button from "../Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Seeds = [
  { name: "PURSE" },
  { name: "TANKED" },
  { name: "DISUNITE" },
  { name: "SECTOR" },
  { name: "IGNITE" },
  { name: "ENEMY" },
  { name: "DILUVIUM" },
  { name: "RANCHER" },
  { name: "MEDDLE" },
  { name: "BATIK" },
  { name: "BICEPS" },
  { name: "EXAMEN" },
  { name: "OLOGY" },
  { name: "LEPIDOTE" },
  { name: "GROUCHY" },
  { name: "AGNAIL" },
];

const Services = [{ name: "Help" }, { name: "Privacy" }, { name: "Terms" }];

export const SeedsRegistration = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="overflow-y-auto">
        <div className="flex items-center justify-center mt-4 sm:mt-8 md:mt-10 lg:mt-10 mb-6">
          <div className="flex items-center p-4 md:p-8 rounded-[129px] bg-white">
            <Seed className="size-14 xxs:size-20 md:size-25" />
          </div>
        </div>
        <h3 className="text-[22px] lg:text-4xl text-center font-semibold">
          Register Your Account
        </h3>
        <p className="text-[#000000B5] text-[14px] md:text-xl pl-4 md:pl-8 mt-7 font-normal">
          Your Seed
        </p>
        <div className="mt-2 bg-white rounded-xl border-[#ABABAB57] border mx-4 md:mx-7">
          <div className="flex flex-wrap gap-2.5 p-5">
            {Seeds.map((seed) => (
              <span className="px-2 py-1.5 rounded-md border border-[#D5D5D5] font-normal text-[11px] lg:text-[20px]">
                {seed.name}
              </span>
            ))}
          </div>
        </div>
        <div className="xs:flex justify-between items-center mx-5 md:mx-7 mt-7">
          <span className="sm:flex gap-1 sm:gap-4 text-[10px] md:text-[16px] lg:text-xl">
            Already have account?
            <Link
              href="/login"
              className="cursor-pointer lg:underline text-[#36F] lg:text-black"
            >
              Login here
            </Link>
          </span>
          <div className="flex xxs::justify-between items-center gap-4 sm:gap-10 text-[10px] md:text-[15.801px]">
            <span className="flex items-center gap-2">
              <Save />
              Save
            </span>
            <span className="flex items-center gap-2">
              <Copy />
              Copy
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4 xs:mt-10">
          <Button
            text="I have save my seed"
            className=" text-[12px] md:text-[19px]! px-18 md:px-30 py-1.5 md:py-4! mt-7"
          />
        </div>
        <div className="flex justify-center gap-5 xs:gap-10 mb-4 mt-6">
          {Services.map((s) => (
            <p className="flex justify-between text-sm lg:text-lg font-normal mt-4">
              {s.name}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
};
