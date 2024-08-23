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
import InfiniteSlide from "./InfiniteSlide/InfiniteSlide";

export default function Tech() {
  const data: [JSX.Element, string][] = [
    [jsIcon, "JavaScript"],
    [tsIcon, "TypeScript"],
    [reactIcon, "React"],
    [reduxIcon, "Redux"],
    [jestIcon, "Jest"],
    [tailwindIcon, "Tailwind"],
    [htmlIcon, "HTML"],
    [cssIcon, "CSS"],
    [figmaIcon, "Figma"],
  ];
  const items = data.map((icon, index) => (
    <Icon key={`${icon[0]} + ${index}`} data={icon} />
  ));

  return (
    <div className="relative flex flex-col gap-4 items-center col-[1/14] row-[5/6] bg-primary rounded-[20px] border-y-[2px] border-borderColor p-[30px]">
      <SectionHead className="text-[1.3rem]">TECH</SectionHead>
      <InfiniteSlide items={items} time={30} className="w-[100%] py-[5px] " />
      <FadingLeft />
      <FadingRight />
    </div>
  );
}
