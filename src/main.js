// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  routes
} from "./routes";
import store from "./store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
