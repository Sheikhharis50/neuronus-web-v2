import Container from "@/components/Container";
import Description from "@/components/Description";
import Heading from "@/components/Heading";
import DataEncryption from "@/public/icons/watch-demo/DataEncryption";
import EyeCross from "@/public/icons/watch-demo/EyeCross";
import Tick from "@/public/icons/watch-demo/signupFlow/Tick";
import X from "@/public/icons/watch-demo/X";

const DataFields = [
  "IP addresses",
  "Unencrypted private keys",
  "Readable message content",
  "Personal identification",
];

const Transparency = () => {
  const greenBorder =
    "rounded-full ms-10 md:ms-20 p-1 border border-[#15D500] w-fit";
  return (
    <Container className="py-10 md:py-20">
      <p className="text-[#4D67FF] font-semibold text-[9px] xs:text-base sm:text-[22px] text-center">
        Full Transparency
      </p>
      <Heading className="text-center">What We Actually Store</Heading>
      <Description
        text="Complete transparency about our data practices. No hidden clauses, no fine print."
        className="text-center text-black!"
      />
      <div className="grid lg:grid-cols-2 gap-4 md:gap-10 px-5.5 sm:px-0 pt-11">
        {/* Grid1 */}
        <div className="bg-white border border-[#15D500] rounded-[10px] ps-4.25 sm:ps-6.5 pt-5.5 sm:pt-8">
          <div className="flex item-center gap-4 sm:gap-5.75">
            <div className="bg-[#DBE0FF] rounded-[5px] w-fit px-2 md:px-4 py-2.5 md:py-3.25">
              <DataEncryption className="size-4 md:size-6" />
            </div>
            <p className="font-semibold text-[20px] sm:text-[28px] lg:text-[32px] ">
              What We Store
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-5 mt-2 md:mt-5">
            <div className={greenBorder}>
              <Tick className="size-2 sm:size-5" />
            </div>
            <p className=" text-[13px] sm:text-[20px] xl:text-[22px]">
              Encrypted content (AES-256)
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-5 mb-6.5 mt-5">
            <div className={greenBorder}>
              <Tick className="size-2 sm:size-5" />
            </div>
            <p className="text-[13px] sm:text-[20px] xl:text-[22px]">
              Public keys only
            </p>
          </div>
        </div>
        {/* Grid2 */}
        <div className="bg-white border border-[#FF592C] rounded-[10px] ps-4.25 sm:ps-6.5 pt-5.5 sm:pt-8">
          <div className="flex items-center gap-4 sm:gap-5.75">
            <div className="bg-[#FFD3D3] rounded-[5px] w-fit px-2 md:px-4 py-2.5 md:py-3.25">
              <EyeCross className="size-4 md:size-6" />
            </div>
            <p className="font-semibold text-[20px] sm:text-[28px] md:text-[32px] ">
              What We Never Store
            </p>
          </div>
          <div className="my-5 space-y-4 ">
            {DataFields.map((data, index) => (
              <div key={`${data}-${index}`} className="flex items-center gap-5">
                <div className="rounded-full ms-10 md:ms-20 p-2 flex items-center justify-center bg-[#FFD3D3]">
                  <X className="size-2 sm:size-5" />
                </div>

                <p className="text-[13px] sm:text-[20px] xl:text-[22px] line-through text-black">
                  {data}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="w-[90vw] sm:w-130 text-center mx-auto text-[12px] sm:text-base md:text-[22px] mt-8">
        Our infrastructure is designed so that even if compromised, attackers
        gain nothing readable.
      </p>
    </Container>
  );
};

export default Transparency;
