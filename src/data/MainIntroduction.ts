import type { MainIntroduction } from "@/types/components";
import { TitleStyleType } from "@/types/enum";
import Avengers from "@/images/Avengers.webp";

const ironman_suite_imgs = import.meta.glob("@/images/ironman_suite/*", {
  as: "url",
});

const cybernetic_imgs = import.meta.glob("@/images/cybernetic/*", {
  as: "url",
});

export default {
  article: [
    {
      heading: {
        title: "sec1_header",
        desc: "sec1_desc",
        type: TitleStyleType.AngleBracket,
      },
      content: [
        {
          contentTitle: "sec1_mainContent_subTitle",
          section: [
            {
              texts: [
                "sec1_mainContent_text1",
                "sec1_mainContent_text2",
                "sec1_mainContent_text3",
                "sec1_mainContent_text4",
              ],
            },
          ],
        },
        {
          contentTitle: "sec1_mainContent2_subTitle",
          section: [
            {
              texts: ["sec1_mainContent2_text1", "sec1_mainContent2_text2"],
            },
          ],
        },
        {
          contentTitle: "sec1_mainContent3_subTitle",
          section: [
            {
              texts: [
                "sec1_mainContent3_text1",
                "sec1_mainContent3_text2",
                "sec1_mainContent3_text3",
              ],
            },
          ],
        },
        {
          contentTitle: "sec1_mainContent4_subTitle",
          section: [
            {
              texts: "sec1_mainContent4_text1",
            },
          ],
        },
      ],
    },
    {
      heading: {
        title: "sec2_header",
        desc: "sec2_desc",
        type: TitleStyleType.CurlyBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      content: [
        {
          contentTitle: "sec2_mainContent_subTitle",
          section: [
            {
              sectionTitle: "sec2_mainContnet_timePeriod",
              sectionDesc: "sec2_mainContnet_headship",
              texts: [
                "sec2_mainContent_text1",
                "sec2_mainContent_text2",
                "sec2_mainContent_text3",
                "sec2_mainContent_text4",
                "sec2_mainContent_text5",
              ],
            },
          ],
        },
        {
          section: [
            {
              sectionTitle: "sec2_mainContent2_timePeriod",
              sectionDesc: "sec2_mainContent2_headship",
              texts: [
                "sec2_mainContent2_text1",
                "sec2_mainContent2_text2",
                "sec2_mainContent2_text3",
                "sec2_mainContent2_text4",
              ],
            },
          ],
        },
        {
          section: [
            {
              sectionTitle: "sec2_mainContent3_timePeriod",
              sectionDesc: "sec2_mainContent3_headship",
              texts: [
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
          ],
        },
        {
          section: [
            {
              sectionTitle: "sec2_mainContent4_timePeriod",
              sectionDesc: "sec2_mainContent4_headship",
              texts: "sec2_mainContent4_text1",
            },
          ],
        },
        {
          contentTitle: "sec2_mainContent5_subTitle",
          section: [
            {
              sectionTitle: "sec2_mainContent5_rewardsType1",
              texts: "sec2_mainContent5_rewardsText1",
            },
            {
              sectionTitle: "sec2_mainContent5_rewardsType2",
              texts: "sec2_mainContent5_rewardsText2",
            },
            {
              sectionTitle: "sec2_mainContent5_rewardsType3",
              texts: "sec2_mainContent5_rewardsText3",
            },
            {
              sectionTitle: "sec2_mainContent5_rewardsType4",
              texts: "sec2_mainContent5_rewardsText4",
            },
            {
              sectionTitle: "sec2_mainContent5_rewardsType5",
              texts: "sec2_mainContent5_rewardsText5",
            },
          ],
        },
      ],
    },
    {
      heading: {
        title: "sec3_header",
        desc: "sec3_desc",
        type: TitleStyleType.SquareBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      content: [
        {
          contentTitle: "sec3_mainContent_subTitle",
          section: [
            {
              sectionTitle: "sec3_mainContent_content_subsubTitle",
              texts: "sec3_mainContent_content_textList",
            },
            {
              sectionTitle: "sec3_mainContent_content2_subsubTitle",
              texts: [
                "sec3_mainContent_content2_textList",
                "sec3_mainContent_content3_textList2",
                "sec3_mainContent_content3_textList3",
                "sec3_mainContent_content3_textList4",
              ],
            },
            {
              sectionTitle: "sec3_mainContent_content3_subsubTitle",
              texts: "sec3_mainContent_content3_textList",
            },
          ],
          imgs: Object.entries(ironman_suite_imgs).map(([key]) => key),
        },
        {
          contentTitle: "sec3_mainContent2_subTitle",
          section: [
            {
              sectionTitle: "sec3_mainContent_content_subsubTitle",
              texts: "sec3_mainContent2_content_textList",
            },
            {
              sectionTitle: "sec3_mainContent_content2_subsubTitle",
              texts: "sec3_mainContent2_content2_textList",
            },
            {
              sectionTitle: "sec3_mainContent_content3_subsubTitle",
              texts: "sec3_mainContent2_content3_textList",
            },
          ],
          imgs: Object.entries(cybernetic_imgs).map(([key]) => key),
        },
        {
          contentTitle: "sec3_mainContent3_subTitle",
          section: [
            {
              sectionTitle: "sec3_mainContent_content_subsubTitle",
              texts: "sec3_mainContent3_content_textList",
            },
            {
              sectionTitle: "sec3_mainContent_content2_subsubTitle",
              texts: "sec3_mainContent3_content2_textList",
            },
            {
              sectionTitle: "sec3_mainContent_content3_subsubTitle",
              texts: [
                "sec3_mainContent3_content3_textList",
                "sec3_mainContent3_content3_textList2",
                "sec3_mainContent3_content3_textList3",
                "sec3_mainContent3_content3_textList4",
              ],
            },
          ],
          imgs: [Avengers],
        },
      ],
    },
  ],
} as MainIntroduction;
