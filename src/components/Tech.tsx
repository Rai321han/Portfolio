import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import SectionHead from "./SectionHead";
import {
  jsIcon,
  reactIcon,
  htmlIcon,
  cssIcon,
  tsIcon,
  jestIcon,
  tailwindIcon,
  reduxIcon,
  figmaIcon,
} from "./icons";
import Icon from "./Icon";

export default function Tech() {
  return (
    <div className="relative flex flex-col gap-4 items-center col-[2/12] row-[8/9] bg-primary rounded-[20px] border-y-[2px] border-borderColor p-[30px]">
      <SectionHead className="text-[1.3rem]">TECH</SectionHead>
      <div className="relative w-full overflow-x-hidden">
        <div className="flex flex-row gap-2">
          <div className="animate-marquee flex flex-row gap-2">
            <Icon data={jsIcon} />
            <Icon data={tsIcon} />
            <Icon data={reactIcon} />
            <Icon data={reduxIcon} />
            <Icon data={jestIcon} />
            <Icon data={tailwindIcon} />
            <Icon data={htmlIcon} />
            <Icon data={cssIcon} />
            <Icon data={figmaIcon} />
          </div>
          <div className="animate-marquee flex flex-row gap-2">
            <Icon data={jsIcon} />
            <Icon data={tsIcon} />
            <Icon data={reactIcon} />
            <Icon data={reduxIcon} />
            <Icon data={jestIcon} />
            <Icon data={tailwindIcon} />
            <Icon data={htmlIcon} />
            <Icon data={cssIcon} />
            <Icon data={figmaIcon} />
          </div>
        </div>

        <div className="absolute h-full w-[20px] top-0 left-[0%] bg-gradient-to-r from-primary from-0% to-transparent to-50% "></div>
        <div className="absolute h-full w-[20px] top-0 right-[0%] bg-gradient-to-l from-primary from-0% to-transparent to-50% "></div>
      </div>
      <FadingLeft />
      <FadingRight />
    </div>
  );
}
