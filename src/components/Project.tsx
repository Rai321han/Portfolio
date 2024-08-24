import { WorkDataType } from "../types";
import Icon from "./Icon";
import { GITHUB_ICON, EXTERNAL_ICON } from "./icons";
import { iconMap } from "../constants";
import StackTag from "./StackTag";

type ProjectDataType = {
  project: WorkDataType;
};

export default function Project({ project }: ProjectDataType) {
  const {
    projectTitle,
    description,
    repoLink,
    liveLink,
    imageUrl,
    techStacks,
  } = project;

  const icons = techStacks.map((tech) => iconMap[tech]);

  return (
    <>
      <div className="row-[1/3] relative  w-full overflow-hidden md:grid md:grid-cols-[2fr_3fr] md:grid-rows-1">
        <img
          className="z-[2] md:row-[1/2] md:col-[2/3] rounded-[15px] animate-imageChangeAnimation w-[100%] h-[100%] object-cover origin-center shadow-lg "
          src={imageUrl}
          alt="projectImage"
        />
        <div className=" md:col-[1/2] animate-ScaleYanimation md:animate-ScaleXanimationReverse origin-[0%_100%] rounded-b-[15px] md:rounded-l-[15px]  md:rounded-r-none flex flex-col justify-center gap-2 absolute  bottom-[0%] md:h-full p-pdSecSmall sm:p-pdSecLarge bg-primaryDim w-full">
          <h1 className="text-textColor text-[1.2rem] xs:text-[1.5rem] font-bold sm:max-w-[80%]">
            {projectTitle}
          </h1>
          <p className="text-textColorDim text-[1rem] sm:max-w-[80%] text-justify leading-[1.4rem]">
            {description}
          </p>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-center row-[3/4] py-[15px] overflow-hidden">
        <StackTag stacks={icons} />
        <div className="animate-ScaleXanimationReverse flex flex-row gap-2 justify-stretch">
          <a href={repoLink} target="_blank">
            <Icon data={[GITHUB_ICON, "GitHub Repo"]} />
          </a>
          <a href={liveLink} target="_blank">
            <Icon data={[EXTERNAL_ICON, "See Live"]} />
          </a>
        </div>
      </div>
    </>
  );
}
