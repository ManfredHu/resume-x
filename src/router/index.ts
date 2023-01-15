import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import { i18n } from "@/libs/i18n";
import type { SupportLang } from "@/types/enum";

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
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

router.beforeEach(async (to, from, next) => {
  const lang = to.params.lang as SupportLang;
  i18n.global.locale.value = lang;
  return next();
});

export default router;
