import Section from "./Section";

export default function Education() {
  return (
    <Section className="col-[1/14] md:col-[6/11] row-[8/9] md:row-[6/7] flex flex-col gap-6 justify-between">
      <div className="flex flex-row justify-between">
        <div>
          <p className="font-Inter font-semibold text-[2rem] sm:text-[3rem]  md:leading-[4rem]">
            <span className="text-[#8a8a93]"> Studied</span>
            <br />
          </p>
        </div>
        <div className="text-right font-Inter font-semibold text-[#8a8a93]">
          {/* Noakhali Science & <br /> Technology University <br /> */}
          CGPA 3.50
        </div>
      </div>
      <div className="font-Inter font-semibold text-[2rem] sm:text-[3rem] leading-[2.5rem] sm:leading-[3.5rem]">
        {" "}
        Information & <br /> Communication Engineering
      </div>
    </Section>
  );
}
