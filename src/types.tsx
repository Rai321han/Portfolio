import { TechStack } from "./constants";

export type WorksDataType = {
  projectTitle: string;
  description: string;
  imageUrl: string;
  repoLink: string;
  liveLink: string;
  techStacks: TechStack[];
}[];

export type WorkDataType = {
  projectTitle: string;
  description: string;
  imageUrl: string;
  repoLink: string;
  liveLink: string;
  techStacks: TechStack[];
};
