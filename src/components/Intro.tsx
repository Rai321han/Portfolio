import { LOCATION_ICON } from "./icons";
import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import Section from "./Section";

export default function Intro() {
  return (
    <Section className="flex gap-[20px] flex-col justify-center items-center col-[1/14]  row-[3/4] ">
      <div className="text-textColor flex flex-col justify-center items-center gap-4">
        <div className="text-4xl font-chaney text-center">
          RAIHAN
          <br />
          UDDIN
        </div>
        <div className="font-prosto tracking-widest text-textColorDim text-xs">
          FRONTEND DEVELOPER
        </div>
      </div>
      <div className="text-justify leading-6 text-[16px]">
        I love solving problems and making websites that are user-friendly and
        can scale up smoothly. Right now, I'm wrapping up my Bachelor's in
        Information and Communication Engineering at Noakhali Science and
        Technology University, set to graduate by mid-2024.
      </div>
      <div className="flex gap-2 items-center">
        {LOCATION_ICON}
        <span className="text-textColorDim text-[0.8rem]">
          Chittagong, Bangladesh
        </span>
      </div>
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
