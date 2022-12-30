import type { MainIntroduction } from "@/types/components";
import { TitleStyleType } from "@/types/enum";

export default {
  content: [
    {
      header: {
        title: "Professional skills",
        desc: "Some places to brag",
        type: TitleStyleType.AngleBracket,
      },
      mainContent: [
        {
          subTitle: "Programming",
          textList: [
            "Proficient in a variety of programming languages, including C++, Java, Python, and JavaScript",
            "Knowledgeable in artificial intelligence and machine learning techniques",
            "Experienced in designing and building robots for a variety of applications, including combat and rescue operations",
            "Skilled in using various industrial design software",
          ],
        },
        {
          subTitle: "Combat",
          textList: [
            "Proficient in hand-to-hand combat and weapons training",
            "Trained in advanced military tactics and strategy",
          ],
        },
        {
          subTitle: "Leadership",
          textList: [
            "Proven track record of leading and managing teams in various projects",
            "Skilled in public speaking and presentation",
            "Ability to make strategic and informed decisions under pressure",
          ],
        },
        {
          subTitle: "Very handsome",
          textList: "I'm handsome, or there wouldn't be chili peppers.",
        },
      ],
    },
    {
      header: {
        title: "Experience & Awards",
        desc: "Those little monsters I hit",
        type: TitleStyleType.CurlyBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      mainContent: [
        {
          subTitle: "Experience",
        },
        {
          period: {
            timePeriod: "2017-present",
            headship: "CEO, Stark Industries",
          },
          textList: [
            "Ensured the smooth and efficient operation of the company",
            "Generated significant profits and financial success for the company",
            "Promoted the company's brand and reputation globally",
            "Developed and produced new generations of robots and advanced armor for various applications",
            "Led research and development efforts to create innovative technologies and products",
          ],
        },
        {
          period: {
            timePeriod: "2013-2017",
            headship: "Chief Technology Officer, Stark Industries",
          },
          textList: [
            "Managed and directed the work of various teams and departments within the company",
            "Negotiated partnerships and collaborations with other organizations",
            "Made strategic decisions and plans to guide the future direction of the company",
            "Represented the company in public appearances and events",
          ],
        },
        {
          period: {
            timePeriod: "2013-2017",
            headship:
              "Assistant Professor of Computer Science, Oxford University",
          },
          textList: [
            "Taught undergraduate and graduate level courses in computer science and related fields",
            "Conducted research in computer science and related areas, and published papers in academic journals and conferences",
            "Advised students on their academic and professional goals",
            "Contributed to the academic community through service activities such as participating in departmental and university committees",
            "Mentored junior faculty and graduate students",
            "Participated in professional development activities to stay up-to-date with the latest research and trends in the field",
            "Collaborated with other faculty and researchers on research projects and initiatives",
            "Engaged in outreach activities to promote the field of computer science and the university's programs",
          ],
        },
        {
          period: {
            timePeriod: "2008-2013",
            headship: "University Student",
          },
          textList: "I was a student at Oxford University",
        },
      ],
    },
    {
      header: {
        title: "Projects",
        desc: "Those gadgets",
        type: TitleStyleType.SquareBracket,
        inlineStartLine: true,
        inlineEndLine: true,
      },
      mainContent: {},
    },
  ],
} as MainIntroduction;
