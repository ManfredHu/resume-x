import type { Components } from "ionicons/dist/types/index";
import type { TitleStyleType } from "./enum";

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

export type MainIntroductionTitle = {
  title: string;
  desc?: string;
  type: TitleStyleType;
  inlineStartLine?: boolean;
  inlineEndLine?: boolean;
};

type MainIntroductionContent = {
  // section common params
  subTitle?: string;
  textList?: string | string[];

  // for 'Experience'
  period?: {
    timePeriod?: string;
    headship?: string;
    textList?: string | string[];
  };

  // for 'Awards'
  rewards?: {
    rewardsType?: string;
    text: string;
  }[];

  // // for 'Projects'
  // projects?: {
  //   projectName: string;
  //   projectImages?: string[];

  //   content?: {
  //     subTile?: string;
  //     textList?: string[];
  //   };
  // }[];
};

export type MainIntroduction = {
  content: {
    header: MainIntroductionTitle;
    mainContent: MainIntroductionContent[];
  }[];
};
