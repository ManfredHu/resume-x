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
        {
          subTitle: "Awards",
          rewards: [
            {
              rewardsType: "National Science Foundation Honorable Mention",
              text: "This award recognizes outstanding research and academic achievements in science and engineering fields. It is given to a select group of individuals who have made significant contributions to their fields through research, teaching, and service.",
            },
            {
              rewardsType:
                "US Patent and Trademark Office patents for innovative technologies",
              text: "These patents would recognize Tony Stark's innovative technologies developed for industrial production. Patent holders are granted exclusive rights to their inventions, which can be used to generate revenue through licensing or selling the patented technology to others.",
            },
            {
              rewardsType:
                "American Association for Artificial Intelligence Distinguished Scientist Award",
              text: "This award recognizes individuals who have made significant contributions to the field of artificial intelligence through their research, education, and leadership. It is given to a small group of individuals who have distinguished themselves in their work and have contributed to the advancement of the field.",
            },
            {
              rewardsType:
                "Institute of Electrical and Electronics Engineers Fellowship",
              text: "This honor is given to a select group of individuals who have made significant contributions to the fields of electrical and electronic engineering through their research, teaching, and service. Fellowship is a prestigious recognition that is only given to a small percentage of the institute's members.",
            },
            {
              rewardsType: "Oxford University Outstanding Teacher Award",
              text: "This award recognizes faculty members who have demonstrated excellence in teaching and have made significant contributions to the education of their students. It is given to a small group of individuals who have been nominated by their colleagues and selected by a committee of their peers.",
            },
          ],
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
