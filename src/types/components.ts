import type { Components } from "ionicons/dist/types/index";

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

export enum TitleStyleType {
  // '<Something />'
  AngleBracket,
  // '{Something}'
  CurlyBracket,
  // '[Something]'
  SquareBracket,
  // '(Something)'
  RoundBracket,
}

export type MainIntroductionTitle = {
  title: string;
  desc?: string;
  type: TitleStyleType;
  inlineStartLine?: boolean;
  inlineEndLine?: boolean;
};

type MainIntroductionContent = {
  subTitle?: string;
  textList?: string[];

  // for 'Experience'
  period?: {
    timePeriod?: string;
    headship?: string;
    textList?: string[];
  }[];

  // for 'Awards'
  rewards?: {
    rewardsType?: string;
    text: string;
  }[];

  // for 'Projects'
  projects?: {
    projectName: string;
    projectImages?: string[];

    content?: {
      subTile?: string;
      textList?: string | string[];
    };
  }[];
};

export type MainIntroduction = {
  content: {
    header: MainIntroductionTitle;
    content: MainIntroductionContent;
  }[];
};

export type FooterPage = {
  footerTextArr: string[];
};
