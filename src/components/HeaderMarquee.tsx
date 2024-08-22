import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";

export default function HeaderMarquee() {
  return (
    <div className="relative col-[1/14] row-[2/3] bg-primary rounded-[20px]  border-y-[0.5px] border-borderColor overflow-x-hidden  py-[8px] text-[12px] tracking-wide text-textColor">
      <div className="flex flex-row">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|&nbsp;</span>
        </div>
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|</span>
          <span className="font-prosto text-textColorDim"> PERSONAL </span>
          <span className="font-chaney text-textColorDim">PORTFOLIO </span>
          <span>|&nbsp;</span>
        </div>
      </div>
      <FadingLeft />
      <FadingRight />
    </div>
  );
}
