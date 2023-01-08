import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import zhCN from "../locales/zh-cn.json";
import { URL } from "hu-tool";
const messages = {
  en,
  "zh-cn": zhCN,
};

export const i18n = createI18n({
  legacy: false,
  locale: URL().getQueryParam("lang") || localStorage.getItem("lang") || "en",
  messages,
});
