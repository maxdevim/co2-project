import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import CarbonView from "../views/Carbon.vue";

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/co2",
      name: "carbon",
      component: CarbonView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/about/:subpage",
      name: "aboutSubpage",
      component: AboutView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: HomeView,
    },
  ],
});

export default router;
