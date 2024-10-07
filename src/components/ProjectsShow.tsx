import { EXTERNAL_ICON } from "./icons";
import Section from "./Section";
import { WorkDataType } from "../types";
import Light from "./Light";

export default function ProjectsShow({ project }: { project: WorkDataType }) {
  const { projectTitle, description, imageUrl } = project;
  return (
    <Section className="group grid grid-cols-1 grid-rows-[350px_repeat(2,auto)] gap-4">
      <Light />
      <div className="row-[1/2] rounded-[20px] overflow-hidden">
        <img
          className="group-hover:scale-110 z-[1] transition-transform duration-300 object-cover w-full h-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="row-[2/3] flex flex-row justify-between mb-4 mt-[20px]">
        <div className="font-Inter text-[2rem] font-semibold">
          {projectTitle}
        </div>
        {EXTERNAL_ICON}
      </div>
      <p className="mt-[10px] row-[3/4] text-textColorDim">{description}</p>
    </Section>
  );
}
