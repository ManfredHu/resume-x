/* eslint-env node */
const fs = require("fs");
const debug = require("debug");

// could add Debug=tailwindcss:* in environment variable to see debug logs
const log = debug("tailwindcss:config");

const baseRootVariables = fs.readFileSync("./src/assets/base.css", "utf8");
const matchResult = baseRootVariables.match(/:root\s+\{([\w\W]+)\}/)[1];
if (!matchResult) {
  throw new Error("tailwind.config.cjs: Can't find :root in base.css");
}
const lines = matchResult
  .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")
  .replace(/\n|\r|\r\n|\s+/g, "")
  .split(";")
  .filter((j) => !!j);

// Define your custom colors here, from 'src/assets/base.css'
// change --mh-c-primary: #1169bf; to primary: "#1169bf",
const customColors = lines.reduce((acc, line) => {
  const [key, value] = line.split(":");
  const newKey = key.replace("--mh-c-", "");
  acc[newKey] = value;
  return acc;
}, {});

log("customColors", customColors);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,jd,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        //utilities like `bg-primary`
        ...customColors,
      },
      textColor: {
        //like `text-primary`
        ...customColors,
      },
      borderColor: {
        //like `border-primary`
        ...customColors,
      },
    },
  },
  plugins: [],
};
