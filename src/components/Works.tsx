import SectionHead from "./SectionHead";
import { WorksDataType } from "../types";
import ProjectsSlide from "./ProjectsSlide";
import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";
import Section from "./Section";

const worksData: WorksDataType = [
  {
    projectTitle: "Modern Bank Landing Page",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolore quis odio ipsum quibusdam except.",
    imageUrl: "/images/project1.webp",
    repoLink: "https://github.com/Rai321han/modern-bank-landing-page",
    liveLink: "https://modern-bank-landing-page-roan.vercel.app",
    techStacks: ["react", "css", "tailwind", "ts"],
  },
  {
    projectTitle: "Multi Select React Component",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolore quis odio ipsum quibusdam except.",
    imageUrl: "/images/project2.webp",
    repoLink: "https://github.com/Rai321han/multi-select-component",
    liveLink: "https://multi-select-component-brown.vercel.app",
    techStacks: ["tailwind", "react", "ts"],
  },
];

export default function Works() {
  return (
    <Section className="  flex flex-col gap-4 col-[1/14] md:col-[1/11] row-[7/10] md:row-[6/10]">
      <SectionHead className="text-center">WORKS</SectionHead>
      <ProjectsSlide worksData={worksData} />
      <FadingLeft />
      <FadingRight />
    </Section>
  );
}
