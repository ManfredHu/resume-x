import type { BaseInfoType } from "@/types/components";
import Avator from "@/images/iron-man.jpeg";

export default {
  avator: Avator,

  baseInfoList: [
    {
      name: "logo-facebook", // for icon key
      text: "name", // for text key
    },
    {
      name: "call",
      text: "call", // for text key
      link: "tel:555-555-5555",
    },
    {
      name: "school",
      text: "school", // for text key,
    },
    {
      name: "mail",
      text: "mail", // for text key
      link: "mailto:tony@starkindustries.com",
    },
    {
      name: "cube-sharp",
      text: "science", // for text key
    },
    {
      name: "logo-github",
      text: "github", // for text key
      link: "https://github.com/Tony Stark",
    },
    {
      name: "calendar",
      text: "birthday", // for text key
    },
    {
      name: "home",
      text: "home",
      link: "https://Tony Stark.com/",
    },
  ],
} as BaseInfoType;
