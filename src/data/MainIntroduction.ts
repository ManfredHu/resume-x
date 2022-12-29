import type { MainIntroduction } from "@/types/components";
import { TitleStyleType } from "@/types/components";
export default {
  content: [
    {
      header: {
        title: "Professional skills",
        desc: "Some places to brag",
        type: TitleStyleType.AngleBracket,
      },
      content: {},
    },
    {
      header: {
        title: "Experience",
        desc: "Those little monsters I hit",
        type: TitleStyleType.CurlyBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      content: {},
    },
    {
      header: {
        title: "Projects",
        desc: "Those gadgets",
        type: TitleStyleType.SquareBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      content: {},
    },
  ],
} as MainIntroduction;
