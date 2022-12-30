import type { BaseInfoType } from "@/types/components";
import Avator from "@/images/iron-man.jpeg";

export default {
  avator: Avator,
  name: "Tony Stark",
  nickName: "Iron Man",
  applyPosition: "Application Position",
  target: "The Leader of the Avengers",

  baseInfoList: [
    {
      name: "logo-facebook",
      text: "Tony Stark",
    },
    {
      name: "call",
      text: "555-555-5555",
      link: "tel:555-555-5555",
    },
    {
      name: "school",
      text: "Oxford University (2009-2013)",
    },
    {
      name: "mail",
      text: "tony@starkindustries.com",
      link: "mailto:tony@starkindustries.com",
    },
    {
      name: "cube-sharp",
      text: "Computer Science",
    },
    {
      name: "logo-github",
      text: "github.com/Tony Stark",
      link: "https://github.com/Tony Stark",
    },
    {
      name: "calendar",
      text: "May 29th,1970",
    },
    {
      name: "home",
      text: "Tony Stark.com",
      link: "https://Tony Stark.com/",
    },
  ],
} as BaseInfoType;
