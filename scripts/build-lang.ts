import fs from "fs";
import { languageConfig } from "../src/config/language";

const locales = languageConfig.map((j) => j.locale);
console.log("locales.length: ", locales.length);

if (!fs.existsSync("src/locales")) {
  fs.mkdirSync("src/locales");
}

locales.forEach((locale) => {
  const tag = fs.existsSync("src/locales/" + locale + ".json");
  if (!tag) {
    console.log("create files:" + "src/locales/" + locale + ".json");
    fs.writeFileSync("src/locales/" + locale + ".json", "{}");
  }
});
