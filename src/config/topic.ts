/**
 * Topic configuration
 * Topic means It compony name or Organization name
 *
 * Compony
 * like Facebook, Google, Microsoft, Apple, Amazon, Netflix, etc.
 * like Baidu, Tencent, Alibaba etc.
 * like Bytedance, MeiTuan, Didi, etc.
 *
 * Organization
 * like Vue, React, Angular, etc.
 */

const topicConfig = {
  // US Compony
  apple: {
    primaryColor: "#000" as const,
    label: "Apple",
  },
  amazon: {
    primaryColor: "#ff9900" as const,
    label: "Amazon",
  },
  facebook: {
    primaryColor: "#3b5998" as const,
    label: "Facebook",
  },
  google: {
    primaryColor: "#4285f4" as const,
    label: "Google",
  },
  microsoft: {
    primaryColor: "#f65314" as const,
    label: "Microsoft",
  },
  netflix: {
    primaryColor: "#e50914" as const,
    label: "Netflix",
  },
  // CN Compony
  alibaba: {
    primaryColor: "#ff5000" as const,
    label: "阿里巴巴",
  },
  baidu: {
    primaryColor: "#2932e1" as const,
    label: "百度",
  },
  bytedance: {
    primaryColor: "#39579f" as const,
    label: "字节跳动",
  },
  didi: {
    primaryColor: "#ff5000" as const,
    label: "滴滴",
  },
  jd: {
    primaryColor: "#ff5000" as const,
    label: "京东",
  },
  meituan: {
    primaryColor: "#ff5000" as const,
    label: "美团",
  },
  netease: {
    primaryColor: "#c20c0c" as const,
    label: "网易",
  },
  shoope: {
    primaryColor: "#ff5000" as const,
    label: "Shoope",
  },
  tencent: {
    primaryColor: "#3458b0" as const,
    label: "腾讯",
  },
  vip: {
    primaryColor: "#cf0075" as const,
    label: "唯品会",
  },
  wechat: {
    primaryColor: "#07c160" as const,
    label: "微信",
  },
  // ORG
  vue: {
    primaryColor: "#42b983" as const,
    label: "Vue",
  },
  react: {
    primaryColor: "#61dafb" as const,
    label: "React",
  },
  angular: {
    primaryColor: "#dd0031" as const,
    label: "Angular",
  },
  github: {
    primaryColor: "#24292e" as const,
    label: "Github",
  },
};
export default topicConfig;

export type Topic = keyof typeof topicConfig;
