import Heading from "@/components/Heading";
import Container from "@/components/Container";
import Background from "./Background";
import { rules } from "@/data/home/basic-rules";
import SectionMerger from "@/components/SectionMerger";

const BasicRules = () => {
  return (
    <>
      <SectionMerger />
      <div className="lg:h-190 xl:h-210 2xl:h-240 relative overflow-hidden">
        <Background />
        <Heading className="text-center relative pt-20 sm:pt-26 lg:py-32 xl:py-36 2xl:py-40">
          We Work on <br className="lg:hidden" /> 3 Basic Rules
        </Heading>
        <Container className="relative grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 py-16 sm:py-20 lg:pt-5! lg:pb-0!">
          {rules.map((rule, index) => (
            <div
              key={`basic-rule-${index}`}
              className={`flex flex-col items-center text-center gap-1 xl:gap-2 ${
                index === 1
                  ? "lg:pt-6 xl:pt-10 2xl:pt-15"
                  : index === 0
                  ? "lg:pt-1 2xl:pt-2"
                  : ""
              }`}
            >
              {rule.icon}
              <h2 className="text-xl xs:text-2xl md:text-3xl xl:text-4xl 2xl:text-[46px] font-semibold">
                {rule.title}
              </h2>
              <p
                className="text-xs xs:text-sm md:text-base xl:text-lg 2xl:text-xl"
                dangerouslySetInnerHTML={{ __html: rule.description }}
              />
            </div>
          ))}
        </Container>
      </div>
      <SectionMerger bottom />
    </>
  );
};

export default BasicRules;
