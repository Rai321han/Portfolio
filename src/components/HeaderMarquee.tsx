import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import InfiniteSlide from "./InfiniteSlide/InfiniteSlide";
import Section from "./Section";

export default function HeaderMarquee() {
  const data = (
    <>
      <span className="font-prosto text-textColorDim"> PERSONAL </span>
      <span className="font-chaney text-textColor">PORTFOLIO </span>
      <span>|</span>
    </>
  );

  const items = Array.from({ length: 10 }, (_, index) => (
    <div key={index}>{data}</div>
  ));

  return (
    <Section className="col-[1/14] md:col-[1/11] row-[2/3] overflow-x-hidden  md:py-[8px] lg:py-[8px] text-[12px] text-textColor">
      <InfiniteSlide items={items} time={40} className="w-[100%]" />
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
