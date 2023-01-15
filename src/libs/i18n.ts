import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import zh from "../locales/zh.json";
import ja from "../locales/ja.json";
import de from "../locales/de.json";
import fr from "../locales/fr.json";
import { URL } from "hu-tool";

const messages = {
  en,
  zh,
  ja,
  de,
  fr,
};

export const i18n = createI18n({
  globalInjection: true, // 全局注册$t方法
  legacy: false,
  locale: URL().getQueryParam("lang") || localStorage.getItem("lang") || "en",
  messages,
});
