import type { RouteRecordRaw } from "vue-router"; // Ts needs separate imports for types if has the flag verbatimModuleSyntax
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
