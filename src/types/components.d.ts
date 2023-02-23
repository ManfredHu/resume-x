import type { Components } from "ionicons/dist/types/index";
import type { TitleStyleType } from "./enum";

// basic info section
export type BaseInfoType = {
  avator: string;
  name: string;
  nickName: string;
  applyPosition: string;
  target: string;
  baseInfoList: (Partial<Components.IonIcon> & {
    text: string;
    link?: string;
  })[];
};

export type MainIntroduction = {
  article: Article;
};

type Article = {
  heading: MainIntroductionTitle;
  content: MainIntroductionContent[];
}[];

export type MainIntroductionTitle = {
  title: string;
  desc?: string;
  type: TitleStyleType;
  inlineStartLine?: boolean;
  inlineEndLine?: boolean;
};

type Section = {
  sectionTitle?: string;
  sectionDesc?: string;
  texts?: string | string[];
};

type MainIntroductionContent = {
  // section common params
  contentTitle?: string;
  section?: Section[];
  imgs?: string[];
};
