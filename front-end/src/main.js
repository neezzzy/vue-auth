import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import naive from "naive-ui";
import mitt from "mitt";
import store from "./store/index";
import router from "./router";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(naive);
app.use(store);
app.use(router);
app.mount("#app");
