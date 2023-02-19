import type { BaseInfoType } from "@/types/components";
import Avator from "@/images/avator.jpeg";

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
      link: "tel:555-555-5555", // for tel phone which can be clicked
    },
    {
      name: "school",
      text: "school", // for text key,
    },
    {
      name: "mail",
      text: "mail", // for text key
      link: "mailto:tony@starkindustries.com", // for email address which can be clicked
    },
    {
      name: "cube-sharp",
      text: "science", // for text key
    },
    {
      name: "logo-github",
      text: "github", // for text key
      link: "https://github.com/Tony Stark", // for github which can be clicked
    },
    {
      name: "calendar",
      text: "birthday", // for text key
    },
    {
      name: "home",
      text: "home",
      link: "https://Tony Stark.com/", // for personal website which can be clicked
    },
  ],
} as BaseInfoType;
