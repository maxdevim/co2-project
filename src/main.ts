import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { language } from "./lang/language";

const app = createApp(App);

const i18n = createI18n({
  locale:
    sessionStorage.getItem("language") ?? navigator.language.split("-")[0],
  fallbackLocale: "de",
  messages: language,
});

app.use(router);
app.use(i18n);
app.mount("#app");
