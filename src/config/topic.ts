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

type Compony =
  // US
  | "apple"
  | "amazon"
  | "facebook"
  | "google"
  | "microsoft"
  | "netflix"
  // CN
  | "alibaba"
  | "baidu"
  | "bytedance"
  | "didi"
  | "jd"
  | "meituan"
  | "netease"
  | "shoope"
  | "tencent"
  | "vip"
  | "wechat";

type Organization = "vue" | "react" | "angular" | "github";

export type Topic = Compony | Organization;
type TopicConfig = {
  [key in Topic]: {
    primaryColor?: string;
  };
};

export default {
  // US
  apple: {
    primaryColor: "#000",
  },
  amazon: {
    primaryColor: "#ff9900",
  },
  facebook: {
    primaryColor: "#3b5998",
  },
  google: {
    primaryColor: "#4285f4",
  },
  microsoft: {
    primaryColor: "#f65314",
  },
  netflix: {
    primaryColor: "#e50914",
  },
  // CN
  alibaba: {
    primaryColor: "#ff5000",
  },
  baidu: {
    primaryColor: "#2932e1",
  },
  bytedance: {
    primaryColor: "#000",
  },
  didi: {
    primaryColor: "#ff5000",
  },
  jd: {
    primaryColor: "#ff5000",
  },
  meituan: {
    primaryColor: "#ff5000",
  },
  netease: {
    primaryColor: "#c20c0c",
  },
  shoope: {
    primaryColor: "#ff5000",
  },
  tencent: {
    primaryColor: "#3458b0",
  },
  vip: {
    primaryColor: "#cf0075",
  },
  wechat: {
    primaryColor: "#07c160",
  },
  // ORG
  vue: {
    primaryColor: "#42b983",
  },
  react: {
    primaryColor: "#61dafb",
  },
  angular: {
    primaryColor: "#dd0031",
  },
} as TopicConfig;
