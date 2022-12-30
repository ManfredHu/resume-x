import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwindcss.css";
import "./assets/main.css";
import "@/config/title";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
