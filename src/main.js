import { createSSRApp } from "vue";
import App from "./App.vue";

import "./style.css";
import router from "./router";

export function createApp() {
  const app = createSSRApp(App);
  app.use(router);
  return { app };
}
