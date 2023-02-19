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
  // for 'Experience'
  // period?: {
  //   timePeriod?: string;
  //   headship?: string;
  //   textList?: string | string[];
  // };

  // // for 'Awards'
  // rewards?: {
  //   rewardsType?: string;
  //   text: string;
  // }[];

  // // for 'Projects'
  // projects?: {
  //   projectImgUrl?: string[];
  //   content?: {
  //     subsubTitle?: string;
  //     textList?: string | string[];
  //   }[];
  // };
};
