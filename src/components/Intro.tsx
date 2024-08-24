import { LOCATION_ICON } from "./icons";
import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import Section from "./Section";

export default function Intro() {
  return (
    <Section className="lg:grid lg:grid-row-[1fr_2fr_1fr] lg:grid-cols-[1fr_1fr_ 1fr] flex gap-[20px] flex-col justify-center items-center col-[1/14] md:col-[1/7] row-[3/4] md:row-[3/6] ">
      <div className="flex flex-col lg:row-[2/3] lg:col-[1/4] gap-6 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-1">
        <div className="text-textColor flex flex-col  justify-center items-center gap-4 lg:col-[1/2]">
          <div className="m-2 text-[5rem] font-clicker text-center font-thin leading-[4rem] ">
            Raihan
            <br />
            &nbsp; Uddin
          </div>
          <div className="font-prosto tracking-widest text-textColorDim text-[14px]">
            FRONTEND DEVELOPER
          </div>
        </div>
        <div className="text-justify leading-6 text-[16px] lg:text-[20px] lg:leading-7 lg:col-[2/4] lg:pl-2">
          I love solving problems and making websites that are user-friendly and
          can scale up smoothly. Right now, I'm wrapping up my Bachelor's in
          Information and Communication Engineering at Noakhali Science and
          Technology University, set to graduate by mid-2024.
        </div>
      </div>
      <div className="flex gap-2 items-center lg:row-[3/4] lg:col-[2/3]">
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
