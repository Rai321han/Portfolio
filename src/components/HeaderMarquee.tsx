import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import InfiniteSlide from "./InfiniteSlide/InfiniteSlide";

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
    <div className="relative col-[1/14] row-[2/3] bg-primary rounded-[20px]  border-y-[0.5px] border-borderColor overflow-x-hidden  py-[8px] text-[12px] tracking-wide text-textColor">
      <InfiniteSlide items={items} time={50} className="w-[100%]" />
      <FadingLeft />
      <FadingRight />
    </div>
  );
}
