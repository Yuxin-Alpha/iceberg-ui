import { createApp } from "vue";
import App from "./App.vue";

import IcebergUI from "@/packages/index";

createApp(App)
  .use(IcebergUI)
  .mount("#app");
