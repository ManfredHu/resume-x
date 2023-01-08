import type { MainIntroduction } from "@/types/components";
import { TitleStyleType } from "@/types/enum";

export default {
  content: [
    {
      header: {
        title: "sec1_header",
        desc: "sec1_desc",
        type: TitleStyleType.AngleBracket,
      },
      mainContent: [
        {
          subTitle: "sec1_mainContent_subTitle",
          textList: [
            "sec1_mainContent_text1",
            "sec1_mainContent_text2",
            "sec1_mainContent_text3",
            "sec1_mainContent_text4",
          ],
        },
        {
          subTitle: "sec1_mainContent2_subTitle",
          textList: ["sec1_mainContent2_text1", "sec1_mainContent2_text2"],
        },
        {
          subTitle: "sec1_mainContent3_subTitle",
          textList: [
            "sec1_mainContent3_text1",
            "sec1_mainContent3_text2",
            "sec1_mainContent3_text3",
          ],
        },
        {
          subTitle: "sec1_mainContent4_subTitle",
          textList: "sec1_mainContent4_text1",
        },
      ],
    },
    {
      header: {
        title: "sec2_header",
        desc: "sec2_desc",
        type: TitleStyleType.CurlyBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      mainContent: [
        {
          subTitle: "sec2_mainContent_subTitle",
          period: {
            timePeriod: "sec2_mainContnet_timePeriod",
            headship: "sec2_mainContnet_headship",
          },
          textList: [
            "sec2_mainContent_text1",
            "sec2_mainContent_text2",
            "sec2_mainContent_text3",
            "sec2_mainContent_text4",
            "sec2_mainContent_text5",
          ],
        },
        {
          period: {
            timePeriod: "sec2_mainContent2_timePeriod",
            headship: "sec2_mainContent2_headship",
          },
          textList: [
            "sec2_mainContent2_text1",
            "sec2_mainContent2_text2",
            "sec2_mainContent2_text3",
            "sec2_mainContent2_text4",
          ],
        },
        {
          period: {
            timePeriod: "sec2_mainContent3_timePeriod",
            headship: "sec2_mainContent3_headship",
          },
          textList: [
            "sec2_mainContent3_text1",
            "sec2_mainContent3_text2",
            "sec2_mainContent3_text3",
            "sec2_mainContent3_text4",
            "sec2_mainContent3_text5",
            "sec2_mainContent3_text6",
            "sec2_mainContent3_text7",
            "sec2_mainContent3_text8",
          ],
        },
        {
          period: {
            timePeriod: "sec2_mainContent4_timePeriod",
            headship: "sec2_mainContent4_headship",
          },
          textList: "sec2_mainContent4_text1",
        },
        {
          subTitle: "sec2_mainContent5_subTitle",
          rewards: [
            {
              rewardsType: "sec2_mainContent5_rewardsType1",
              text: "sec2_mainContent5_rewardsText1",
            },
            {
              rewardsType: "sec2_mainContent5_rewardsType2",
              text: "sec2_mainContent5_rewardsText2",
            },
            {
              rewardsType: "sec2_mainContent5_rewardsType3",
              text: "sec2_mainContent5_rewardsText3",
            },
            {
              rewardsType: "sec2_mainContent5_rewardsType4",
              text: "sec2_mainContent5_rewardsText4",
            },
            {
              rewardsType: "sec2_mainContent5_rewardsType5",
              text: "sec2_mainContent5_rewardsText5",
            },
          ],
        },
      ],
    },
    {
      header: {
        title: "header3",
        desc: "header3Desc",
        type: TitleStyleType.SquareBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      mainContent: {},
    },
  ],
} as MainIntroduction;
