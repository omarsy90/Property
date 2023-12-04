import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios" ;
import authService from "./service/authentication.js"

axios.interceptors.request.use(function (config) {
  if (authService.isLogin) {
    config.headers.Authorization = `Bearer ${authService.getToken()}`;
  }
  return config;
});



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
