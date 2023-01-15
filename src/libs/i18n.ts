import { createI18n } from "vue-i18n";

interface FileType {
  [key: string]: Record<string, string>;
}
const files: Record<string, FileType> = import.meta.globEager(
  "../locales/*.json"
);

const messages = Object.entries(files)
  .map(([key, value]) => {
    const newKey = key.split("/").at(-1)?.split(".")[0] as string;
    return {
      [newKey]: value,
    };
  })
  .reduce((a, b) => ({ ...a, ...b }), {});

console.log("laguage message", messages);

export const i18n = createI18n({
  globalInjection: true, // 全局注册$t方法
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  messages,
});
