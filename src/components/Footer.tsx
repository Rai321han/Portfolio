import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";

export default function Footer() {
  return (
    <div className="relative col-[1/14] row-[10/11] bg-primary px-[30px] py-[10px] rounded-[20px] border-y-2 border-borderColor">
      <p className="text-textColorDim text-center text-[0.8rem]">
        All Rights Reserved By Raihan Uddin@2024
      </p>
      <FadingLeft />
      <FadingRight />
    </div>
  );
}
