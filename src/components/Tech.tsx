import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import SectionHead from "./SectionHead";
import {
  JS_ICON,
  TS_ICON,
  REACT_ICON,
  REDUX_ICON,
  JEST_ICON,
  TAILWIND_ICON,
  HTML_ICON,
  CSS_ICON,
  FIGMA_ICON,
} from "./icons";
import Icon from "./Icon";
import InfiniteSlide from "./InfiniteSlide/InfiniteSlide";
import Section from "./Section";

export default function Tech() {
  const data: [JSX.Element, string][] = [
    [JS_ICON, "JavaScript"],
    [TS_ICON, "TypeScript"],
    [REACT_ICON, "React"],
    [REDUX_ICON, "Redux"],
    [JEST_ICON, "Jest"],
    [TAILWIND_ICON, "Tailwind"],
    [HTML_ICON, "HTML"],
    [CSS_ICON, "CSS"],
    [FIGMA_ICON, "Figma"],
  ];
  const items = data.map((icon, index) => (
    <Icon key={`${icon[0]} + ${index}`} data={icon} />
  ));

  return (
    <Section className="flex flex-col gap-4 items-center col-[1/14] md:col-[7/11] row-[5/6] md:row-[3/4] bg-primary rounded-[20px] p-[30px]">
      <SectionHead>TECH</SectionHead>
      <InfiniteSlide items={items} time={30} className="w-[100%] py-[5px] " />
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
