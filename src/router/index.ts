import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import { i18n } from "@/libs/i18n";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "mainpage",
    //   component: MainPage,
    // },
    {
      path: "/:lang",
      name: "lang-page",
      component: MainPage,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const lang = to.params.lang as string;
  i18n.global.locale.value = lang;
  return next();
});

export default router;
