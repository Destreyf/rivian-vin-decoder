import { createRouter, createWebHistory } from "vue-router";

import Vin from "./components/Vin.vue";
import Home from "./components/Home.vue";

export const router = createRouter({
  history: createWebHistory(),
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