import { WorkDataType } from "../types";
import Icon from "./Icon";
import { githubIcon, externalLinkIcon } from "./icons";

type ProjectDataType = {
  project: WorkDataType;
};

export default function Project({ project }: ProjectDataType) {
  const { projectTitle, description, repoLink, liveLink, imageUrl } = project;
  return (
    <>
      <div className="row-[1/3] relative  w-full">
        <img
          className=" rounded-[15px] animate-imageChangeAnimation w-[100%] h-[100%] object-cover shadow-lg "
          src={imageUrl}
          alt="projectImage"
        />
        <div className="animate-ScaleYanimation rounded-b-[15px] flex flex-col gap-2 absolute bottom-[0%] p-[30px] bg-primaryDim opacity-[0.8]">
          <h1 className="text-textColor text-[1.2rem] font-bold max-w-[80%]">
            {projectTitle}
          </h1>
          <p className="text-textColorDim text-[1rem] max-w-[80%]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center row-[3/4] p-[15px]">
        <div></div>
        <div className="flex flex-row gap-2 justify-stretch">
          <a
            href={repoLink}
            target="_blank"
            className="animate-imageChangeAnimation"
          >
            <Icon data={[githubIcon, "GitHub Repo"]} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            className="animate-imageChangeAnimation"
          >
            <Icon data={[externalLinkIcon, "See Live"]} />
          </a>
        </div>
      </div>
    </>
  );
}
