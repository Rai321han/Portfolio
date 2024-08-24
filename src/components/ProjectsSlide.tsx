import { useState } from "react";
import { WorksDataType } from "../types";
import Project from "./Project";
import { RSLIDE_ICON, LSLIDE_ICON } from "./icons";

type ProjectSlideDataType = {
  worksData: WorksDataType;
};

export default function ProjectsSlide({ worksData }: ProjectSlideDataType) {
  const [count, setCount] = useState(0);
  const renderedProjects = <Project key={count} project={worksData[count]} />;
  const noOfProjects = worksData.length;

  const handleNextProject = () => {
    setCount((count + 1) % noOfProjects);
  };

  const handlePrevProject = () => {
    if (count - 1 < 0) setCount(noOfProjects - 1);
    else setCount(count - 1);
  };
  return (
    <div className="relative grid grid-cols-1 grid-rows-[repeat(2,200px)_auto]">
      {renderedProjects}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-[10px] z-[10] hover:animate-pulse [&>svg]:w-[60px] [&>svg]:h-[60px]"
        onClick={handlePrevProject}
      >
        {LSLIDE_ICON}
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-[10px] z-[10] hover:animate-pulse [&>svg]:w-[60px] [&>svg]:h-[60px] "
        onClick={handleNextProject}
      >
        {RSLIDE_ICON}
      </div>
    </div>
  );
}
