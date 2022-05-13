import { createRouter, createWebHistory } from "vue-router";

import Vin from "./components/VinPage.vue";
import Home from "./components/HomePage.vue";

export const router = createRouter({
  history: createWebHistory(
    window.location.href.includes("github") ? "/rivian-vin-decoder/" : ""
  ),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/vin/:vin",
      name: "vin",
      component: Vin,
      props: (route) => ({ vin: route.params.vin }),
    },
  ],
});
