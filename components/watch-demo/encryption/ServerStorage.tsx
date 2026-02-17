import ScrollUp from "@/public/icons/watch-demo/signupFlow/ScrollUp";
import Tick from "@/public/icons/watch-demo/signupFlow/Tick";
import KeyCard from "./KeyCard";
import CardTitle from "./CardTitle";
import Pill from "./Pill";
import CardHeading from "./CardHeading";
import CardDescription from "./CardDescription";
import { signupFlowKeys } from "@/data/watch-demo/key-card";

const ServerStorage = () => {
  return (
    <div className="space-y-3 lg:space-y-5">
      <div className="bg-white rounded-[10px] space-y-3 2xl:space-y-5 pt-3 lg:pt-5 2xl:pt-7 pb-3 lg:pb-5 2xl:pb-7">
        <div className="flex justify-between items-center ps-3 pe-1.5 lg:ps-5 lg:pe-2 2xl:ps-7 2xl:pe-2.5">
          <CardTitle text="Server Storage" />
          <Pill text="Stored" />
        </div>

        <hr className="border-[#BDBDBD]" />

        <div className="flex justify-between items-center ps-3 pe-1.5 lg:ps-5 lg:pe-2 2xl:ps-7 2xl:pe-2.5">
          <div className="flex gap-5 items-center">
            <CardHeading text="Login Hash" />
            <Pill
              text="Verified"
              icon={<Tick />}
              className="px-2! bg-[#E2FBE9]! text-[#4CA154]"
            />
          </div>

          <div className="flex gap-2 items-center">
            <Pill text="$2b$23$0...d95/55" className="px-2!" />
            <ScrollUp />
          </div>
        </div>

        <div className="relative bg-slate ms-3 lg:ms-5 2xl:ms-7 me-1.5 lg:me-2 2xl:me-2.5 p-3.5 space-y-2 rounded-[7px] border border-[#D9D9D9]">
          <div className="absolute top-0 left-0 h-full w-0.5 -translate-x-1 lg:-translate-x-2 2xl:-translate-x-3 bg-[#4C67FF] rounded-l-[7px]" />

          <div className="flex justify-between items-center">
            <CardDescription
              text="Derived from seed phrase (bcrypt)"
              xs
              className="text-black/70"
            />
            <Pill text="Copy" />
          </div>

          <div className="rounded-[6.801px] border border-[#D9D9D9] px-2 lg:px-3 2xl:px-4 py-2 2xl:py-3">
            <CardDescription
              text="$2b$12$067/8tpdVc79iv47kC/yv.j2.HHPXfbgeaK1xLgm9 U/dxd95/TPmK"
              xs
              className="break-all"
            />
          </div>

          <div className="flex justify-between items-center">
            <CardDescription
              text="Length: 60 charts"
              xs
              className="text-black/70"
            />
            <CardDescription text="Hash: bcrypt" xs className="text-black/70" />
          </div>
        </div>
      </div>
      {signupFlowKeys.map((key) => (
        <KeyCard
          key={`server-storage-key-${key.title}`}
          title={key.title}
          label={key.label}
        />
      ))}

      <button className="bg-[#FAE3E3] rounded-[7.017px] w-full font-semibold py-1.5 text-[#AA2E26] text-base text-center">
        Logout
      </button>
    </div>
  );
};

export default ServerStorage;
