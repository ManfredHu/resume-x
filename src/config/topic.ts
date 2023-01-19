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
  | "Facebook"
  | "Google"
  | "Microsoft"
  | "Apple"
  | "Amazon"
  | "Netflix"
  | "Baidu"
  | "Tencent"
  | "Alibaba"
  | "Bytedance"
  | "MeiTuan"
  | "Didi";

type Organization = "Vue" | "React" | "Angular";

type TopicConfig = {
  [key in Compony | Organization]: {
    primaryColor?: string;
  };
};

export default {
  Facebook: {
    primaryColor: "#3b5998",
  },
  Google: {
    primaryColor: "#4285f4",
  },
  Microsoft: {
    primaryColor: "#f65314",
  },
  Apple: {
    primaryColor: "#000",
  },
  Amazon: {
    primaryColor: "#ff9900",
  },
  Netflix: {
    primaryColor: "#e50914",
  },
  Baidu: {
    primaryColor: "#2932e1",
  },
  Tencent: {
    primaryColor: "#1aad19",
  },
  Alibaba: {
    primaryColor: "#ff5000",
  },
  Bytedance: {
    primaryColor: "#000",
  },
  MeiTuan: {
    primaryColor: "#ff5000",
  },
  Didi: {
    primaryColor: "#ff5000",
  },
  Vue: {
    primaryColor: "#42b983",
  },
  React: {
    primaryColor: "#61dafb",
  },
} as TopicConfig;
