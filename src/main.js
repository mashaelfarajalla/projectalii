import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

// Vue.use(VueFuse)
// Vue.use(VModal)
// Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }

  i18n.locale = language;
  next();
});

createApp(App).use(i18n).use(router).mount("#app");
