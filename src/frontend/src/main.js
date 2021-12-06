import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import DefaultLayout from "./layouts/DefaultLayout";

Vue.component("default-layout", DefaultLayout)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
