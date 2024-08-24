import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import Section from "./Section";

export default function Intro() {
  return (
    <Section className="antialiased lg:grid lg:grid-rows-[1fr_repeat(2,auto)_1fr] lg:grid-cols-[1fr_1fr_ 1fr] flex gap-[20px] flex-col justify-center items-center col-[1/14] md:col-[1/7] row-[3/4] md:row-[3/6] ">
      <div className="flex flex-col lg:row-[2/3] lg:col-[1/4] gap-6 lg:grid lg:grid-cols-[auto_auto_auto] lg:grid-rows-[auto]">
        <div className=" text-textColor flex flex-col  justify-center items-center gap-4 lg:col-[1/2]">
          <div className=" m-2 text-[5rem] font-Inter text-center font-bold leading-[4rem]">
            Raihan
            <br />
            &nbsp; Uddin
          </div>
          {/* <div className="font-prosto tracking-widest text-textColorDim text-[14px]">
            FRONTEND DEVELOPER
          </div> */}
        </div>
        <div className="text-[#8a8a93] font-semibold font-Inter leading-6 text-[1.6rem] lg:text-[3rem] lg:leading-[3.3rem] lg:col-[2/4] lg:pl-2">
          SOLVING <br /> <span className="text-white">FRONTEND PROBLEMS </span>
          <br /> FOR A WHILE ...
        </div>
      </div>
      {/* <div className="flex gap-2 items-center lg:row-[3/4] lg:col-[2/3]">
        {LOCATION_ICON}
        <span className="text-textColorDim text-[0.8rem]">
          Chittagong, Bangladesh
        </span>
      </div> */}
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
