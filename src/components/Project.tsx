import { WorkDataType } from "../types";
import Icon from "./Icon";
import { githubIcon, externalLinkIcon } from "./icons";

type ProjectDataType = {
  project: WorkDataType;
};

export default function Project({ project }: ProjectDataType) {
  const { projectTitle, description, repoLink, liveLink, imageUrl } = project;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <img className="rounded-[15px] " src={imageUrl} alt="projectImage" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-textColor text-[1.2rem] font-bold">
          {projectTitle}
        </h1>
        <p className="text-textColorDim text-[1rem]">{description}</p>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div></div>
        <div className="flex flex-row gap-2">
          <a href={repoLink} target="blank">
            <Icon data={githubIcon} />
          </a>
          <a href={liveLink} target="blank">
            <Icon data={externalLinkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}
