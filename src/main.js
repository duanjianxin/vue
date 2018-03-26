// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import { Swipe, SwipeItem, List, Lazyload, options } from "vant";
import "vant/lib/vant-css/index.css";
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(Swipe).use(SwipeItem); //Swipe 轮播
Vue.use(List); //瀑布流滚动加载，用于控制长列表的展示
Vue.use(Lazyload, options); //图片懒加载;
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
