import Button from "@/components/Button";
import Container from "@/components/Container";
import ScrollUp from "@/public/icons/watch-demo/signupFlow/ScrollUp";
import Tick from "@/public/icons/watch-demo/signupFlow/Tick";
import KeyCard from "../../KeyCard";

const Process = [
  { key: "Seeds never leaves your browser." },
  { key: "Ready for cryptographic operations" },
  {
    key: "Deriving cryptographic keys (Login Hash + Encryption Key) from seeds",
  },
  { key: "Generating PGP key pair" },
  {
    key: "Encrypting private key using AES-256-GCM with derived (Encryption Key)",
  },
  { key: "Storing encrypted data on server" },
];

const Signup = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5.25">
      {/* Grid1 */}
      <div>
        {/* signup */}
        <div className="bg-[#F1F6FE] rounded-[9.7px] border border-[#4D67FF] ps-3.5 xs:ps-6 pe-6 xs:pe-10 ">
          <h1 className="text-[18px] sm:text-[27px] font-semibold pt-7">
            Sign up for Secure Account
          </h1>
          <p className="text-[10.676px] sm:text-[13.6px] w-full xl:w-3/4 ">
            Create your account. Server stores only encrypted data – no access
            to your keys or seed.
          </p>
          <Button
            text="Run Signup Flow"
            className="text-[11px] sm:text-[14px]! px-5 sm:px-15 py-2.5 sm:py-4 my-8"
          />
        </div>
        {/* Login */}
        <div className="bg-white border border-[#DCBAFF] mt-8 rounded-[9.7px] ps-3.5 xs:ps-6 pe-6 xs:pe-10">
          <h1 className="text-[18px] sm:text-[27px] font-semibold pt-7">
            Login with Your Seed{" "}
          </h1>
          <p className="mt-3.75 font-normal text-[10.676px] sm:text-[13.601px]">
            Enter Your Seed Phrase
          </p>
          <textarea
            name="text"
            id="text"
            className="w-full bg-[#F7F7F7]/55 border border-[#D4D4D4] pt-2.75 pl-2 xs:pl-4.25 resize-none rounded-[8.1px] placeholder:text-black/40"
            rows={5}
            placeholder="Paste your 16-word seed phrase here..."
          />
          <Button
            text="Login to Account"
            className="text-[11px] sm:text-[14.5px]! py-2.5! sm:py-3.5 px-5! sm:px-10 my-7"
          />
        </div>
        <Button
          text="Decrypt Private Key"
          className="text-[14.5px]! py-3 sm:py-3.75 ple w-5/6 sm:w-full my-4 sm:my-7"
        />
      </div>
      {/* Grid2 */}
      <div className="bg-white rounded-[9.71px] pb-5">
        <h1 className="border-b border-[#BDBDBD] ps-5 xs:ps-7.25 text-[18px] sm:text-[26.7px] font-semibold mt-5 sm:mt-8 pb-4">
          Activity Log
        </h1>
        <div className="bg-[#F7F7F7]/55 mt-5 border ps-[25.25px] pe-[10.75px] mx-4 xs:mx-8 border-[#D8D8D8] rounded-[6.5px] ">
          <div className="flex items-center  pt-4">
            <div className="bg-[#D2D5DB] w-7 sm:w-10 h-7 sm:h-10 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-[18px] sm:text-[17.8px] font-semibold">
                Signup Process
              </h1>
              <button className="bg-[#E6E7EBB5] rounded-[3.25px] text-[8px] xs:text-[9.751px] px-4 py-0.5">
                Pending
              </button>
            </div>

            <div className="flex flex-col gap-2 sm:gap-5 mt-3 mb-6.5 ">
              {Process.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E6E7EB] flex items-center justify-center text-[12px] font-semibold"></div>
                  <p className="text-[12px] sm:text-[11.9px] w-4/5 xl:w-2/3">
                    {item.key}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Grid3 */}
      <div>
        <div className="bg-white rounded-[10px] pb-7.5">
          <div className="flex justify-between items-center px-4 xs:px-7 pt-5 xs:pt-8 pb-2 xs:pb-4 border-b border-[#BDBDBD]">
            <h1 className="text-[20px] sm:text-[26.7px] font-semibold">
              Server Storage
            </h1>
            <button className="bg-[#E6E7EBB5] rounded-[3.25px] px-4 py-1 text-[9.751px]">
              Stored
            </button>
          </div>
          <div className="flex justify-between items-center p-4 xs:p-7 ">
            <div className="text-sm sm:text-[17.878px] font-semibold flex gap-5 items-center">
              Login Hash
              <div className="bg-[#E2FBE9] w-fit py-0.5 rounded-[3.699px] flex items-center gap-1 px-2">
                <Tick />
                <p className="text-[#4CA154] text-[11.096px] font-normal">
                  Verified
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-[#EDEEF1] px2.5 w-fit rounded-[3.688px] px-2.5 py-0.5">
                <p className="font-normal text-[8.675px] xs:text-[11.065px]">
                  $2b$23$0...d95/55
                </p>
              </div>
              <ScrollUp />
            </div>
          </div>
          <div className="relative bg-[#F7F7F7] mx-6 px-4 rounded-[7px] border border-[#D9D9D9]">
            <div className="absolute top-0 left-0 h-full w-0.5 -translate-x-3 bg-[#4C67FF] rounded-l-[7px]" />
            <div className="flex justify-between items-center">
              <p className="text-black/70 font-normal pb-2 pt-5 text-[11.065px]">
                Derived from seed phrase (bcrypt)
              </p>
              <button className="bg-[#E6E7EBB5] rounded-[3.25px] px-4 py-1 text-[9.751px]">
                Copy
              </button>
            </div>
            <div className="bg-slate rounded-[6.801px] border border-[#D9D9D9] px-4 py-3">
              <p className=" text-[8.607px] sm:text-[11.065px]">
                $2b$12$067/8tpdVc79iv47kC/yv.j2.HHPXfbgeaK1xLgm9 U/dxd95/TPmK
              </p>
            </div>
            <div className="flex justify-between items-center text-[11.065px] text-black/70 pb-2.5 pt-3.25">
              <p>Length: 60 charts</p>
              <p>Hash: bcrypt</p>
            </div>
          </div>
          <div></div>
        </div>
        <KeyCard title="Public Key" label="PGP Key" />
        <KeyCard title="Encrypted Private Key" label="AES-256-GCM" />
        <KeyCard title="Encrypted Message" label="-" />
        <KeyCard title="Technical Details" label="Crypto info" />
        <button className="bg-[#FAE3E3] rounded-[7.017px] w-full font-semibold py-1.5 mt-4.25 text-[#AA2E26] text-[16.372px] text-center">
          Logout
        </button>
      </div>
    </Container>
  );
};

export default Signup;
