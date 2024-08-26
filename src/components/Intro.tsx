import Section from "./Section";
import WordPullUp from "./ui/WordPullUp";

export default function Intro() {
  return (
    <Section className="overflow-hidden antialiased lg:grid lg:grid-rows-[1fr_repeat(2,auto)_1fr] lg:grid-cols-[1fr_1fr_ 1fr] flex gap-[20px] flex-col justify-center items-center col-[1/14] md:col-[1/7] row-[3/4] md:row-[3/6] ">
      <div className="animate-moveShade absolute w-[500px] h-[100px] bg-gradient-to-r from-slate-50 to-primary blur-[160px] top-1/2 translate-x-[-50%] translate-y-[-50%] left-0"></div>
      <div className="flex flex-col lg:row-[2/3] lg:col-[1/4] gap-6 lg:grid lg:grid-cols-[auto_auto_auto] lg:grid-rows-[auto]">
        <div className=" text-textColor flex flex-col  justify-center items-center gap-4 lg:col-[1/2]">
          <div className=" m-2 text-[5rem] font-Inter text-center font-bold leading-[4rem]">
            Raihan
            <br />
            &nbsp; Uddin
          </div>
        </div>
        <WordPullUp
          className="text-[#8a8a93] font-semibold font-Inter leading-6 text-[1.4rem] lg:text-[3rem] lg:leading-[3.3rem] lg:col-[2/4] lg:pl-2 "
          // words="Solving Frontend Problems Everyday..."
        />
        {/* <div className="text-[#8a8a93] font-semibold font-Inter leading-6 text-[1.6rem] lg:text-[3rem] lg:leading-[3.3rem] lg:col-[2/4] lg:pl-2">
          Solving <br /> <span className="text-white">Frontend Problems </span>
          <br /> For A While ...
        </div> */}
      </div>
    </Section>
  );
}
