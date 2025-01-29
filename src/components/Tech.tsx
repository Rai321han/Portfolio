import SectionHead from "./SectionHead";
import {
  JS_ICON,
  REACT_ICON,
  REDUX_ICON,
  JEST_ICON,
  TAILWIND_ICON,
  HTML_ICON,
  CSS_ICON,
  FIGMA_ICON,
  VITEST_ICON,
} from "./icons";
import Icon from "./Icon";
import Section from "./Section";
import Light from "./Light";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Tech() {
  const data: [JSX.Element, string][] = [
    [JS_ICON, "JavaScript"],
    // [TS_ICON, "TypeScript"],
    [REACT_ICON, "React"],
    [REDUX_ICON, "Redux"],
    [VITEST_ICON, "Vitest"],
    [TAILWIND_ICON, "Tailwind"],
    [HTML_ICON, "HTML"],
    [CSS_ICON, "CSS"],
    [FIGMA_ICON, "Figma"],
  ];
  const items = data.map((icon, index) => (
    <li className="flex items-center justify-center" key={index}>
      <Icon key={index} data={icon} />
    </li>
  ));

  return (
    <Section className="group flex flex-col gap-4 items-center col-[1/14] md:col-[7/11] row-[5/6] md:row-[3/4] bg-primary rounded-[20px] p-[30px]">
      <Light />
      <SectionHead>tech</SectionHead>
      <InfiniteMovingCards items={items} direction="right" speed="fast" />
    </Section>
  );
}
