import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";

import App from "./App.vue";

import { router } from "./router";

createApp(App).use(router).mount("#app");
