import { WorksDataType } from "../types";
import Project from "./Project";
import { leftSlideIcon, rightSlideIcon } from "./icons";

type ProjectSlideDataType = {
  worksData: WorksDataType;
};

export default function ProjectsSlide({ worksData }: ProjectSlideDataType) {
  const renderedProjects = worksData.map((worksData, index) => {
    return <Project key={index} project={worksData} />;
  });

  return (
    <div className="relative">
      {renderedProjects}
      <div className="absolute top-1/2 -left-[10px] z-[10]">
        {leftSlideIcon}
      </div>
      <div className="absolute top-1/2 -right-[10px] z-[10]">
        {rightSlideIcon}
      </div>
    </div>
  );
}
