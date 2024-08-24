import Section from "./Section";

export default function ProjectIntro() {
  return (
    <div className="col-[1/14] md:col-[1/11] row-[9/10] md:row-[7/8]  text-[#8a8a93] bg-none flex flex-row gap-2 items-center justify-center">
      <Section className="!py-[12px] flex-grow text-center">
        <p className="font-inter font-semibold text-[1rem] sm:text-[1.7rem] italic">
          project
        </p>
      </Section>
      <Section className="!py-[12px] flex-grow text-center">
        <p className="font-inter font-semibold text-[1rem] sm:text-[1.7rem] italic">
          project
        </p>
      </Section>
      <Section className="!py-[12px] flex-grow text-center">
        <p className="font-inter font-semibold text-[1rem] sm:text-[1.7rem] italic">
          project
        </p>
      </Section>
    </div>
  );
}
