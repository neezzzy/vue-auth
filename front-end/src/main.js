import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import naive from "naive-ui";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(naive);
app.mount("#app");
