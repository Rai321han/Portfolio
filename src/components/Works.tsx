import SectionHead from "./SectionHead";
import { WorksDataType } from "../types";
import ProjectsSlide from "./ProjectsSlide";
import FadingLeft from "./FadingLeft";
import FadingRight from "./FadingRight";

const worksData: WorksDataType = [
  //   {
  //    projectTitle: "Modern Bank Landing Page",
  //    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolore quis odio ipsum quibusdam except."
  //     imageUrl: "/images/project1.png",
  //     repoLink: "https://github.com/Rai321han/modern-bank-landing-page",
  //     liveLink: "https://modern-bank-landing-page-roan.vercel.app",
  //     techStacks: ["jsIcon", "tsIcon", "reactIcon", "tailwindIcon"],
  //   },
  {
    projectTitle: "Multi Select React Component",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolore quis odio ipsum quibusdam except.",
    imageUrl: "/images/project2.png",
    repoLink: "https://github.com/Rai321han/multi-select-component",
    liveLink: "https://multi-select-component-brown.vercel.app",
    techStacks: ["jsIcon", "tsIcon", "reactIcon", "tailwindIcon"],
  },
];

export default function Works() {
  return (
    <div className="relative flex flex-col gap-4 col-[1/14] row-[11/16] bg-primary p-[30px] rounded-[20px] border-y-2 border-borderColor">
      <SectionHead className="text-center">WORKS</SectionHead>
      <ProjectsSlide worksData={worksData} />
      <FadingLeft />
      <FadingRight />
    </div>
  );
}
