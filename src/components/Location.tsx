import Light from "./Light";
import Section from "./Section";

export default function Location() {
  return (
    <Section className="group col-[1/14] md:col-[1/6] row-[7/8] md:row-[6/7]  flex flex-col gap-6 justify-between">
      <Light />
      <div className="flex flex-row justify-between">
        <div>
          <p className="font-Inter font-semibold text-[2rem] sm:text-[3rem] md:leading-[4rem]">
            <span className="text-[#8a8a93]"> Based in</span>
            <br />
          </p>
        </div>
        <div className="text-right font-Inter font-semibold text-[#8a8a93]">
          GMT +6
        </div>
      </div>
      <div className="font-Inter font-semibold text-[2rem] sm:text-[3rem] md:text-[3rem] leading-[2.5rem] sm:leading-[3.5rem]">
        Chittagong <br />
        Bangladesh
      </div>
    </Section>
  );
}
