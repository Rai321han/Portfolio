import ProjectsShow from "./ProjectsShow";
import { WorksDataType } from "../types";

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

export default function MyProjects() {
  return (
    <div className="flex flex-col col-[1/14] gap-2 md:gap-3 md:col-[1/11] row-[10/11] md:row-[8/9]">
      <div className="grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] gap-2 md:gap-3">
        <ProjectsShow project={worksData[0]} />
        <ProjectsShow project={worksData[1]} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] gap-2 md:gap-3">
        <ProjectsShow project={worksData[0]} />
        <ProjectsShow project={worksData[1]} />
      </div>
    </div>
  );
}
