import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

import axios from "./utils/request";
app.config.globalProperties.$http = axios;

const pinia = createPinia();
app.use(ElementPlus).use(pinia).use(router).mount("#app");
