import { createApp } from "vue";
import "./index.css";
import "vue-toastification/dist/index.css";

import App from "./App.vue";

import { router } from "./router";

import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!

createApp(App)
  .use(router)
  .use(Toast, { position: POSITION.TOP_RIGHT })
  .mount("#app");
