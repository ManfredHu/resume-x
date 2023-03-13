import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import { i18n } from "@/libs/i18n";
import type { Topic } from "@/config/topic";
import type { Locale } from "@/config/language";
import TopicConfig from "@/config/topic";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:path*",
      name: "lang-topic-page",
      component: MainPage,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const [lang = "en", topic = "vue"] = to.params.path as [Locale, Topic];
  const color = TopicConfig[topic].primaryColor;

  if (typeof color === "string") {
    // change primary color
    document.documentElement.style.setProperty("--mh-c-primary", color);
  }

  i18n.global.locale.value = lang;
  return next();
});

export default router;
