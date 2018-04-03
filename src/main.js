// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import Vuex from "vuex";

import {
  Swipe,
  SwipeItem,
  List,
  Lazyload,
  options,
  Tabbar,
  TabbarItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Popup,
  Area
} from "vant";
Vue.config.productionTip = false;
Vue.use(Vuex);

import "vant/lib/vant-css/index.css";

/* eslint-disable no-new */
Vue.use(Swipe).use(SwipeItem); //Swipe 轮播
Vue.use(List); //瀑布流滚动加载，用于控制长列表的展示
Vue.use(Lazyload, options); //图片懒加载;
Vue.use(Tabbar).use(TabbarItem); //Tabbar 标签栏

Vue.use(GoodsAction); //商品页行动点
Vue.use(GoodsActionBigBtn); //商品页行动点
Vue.use(GoodsActionMiniBtn); //商品页行动点
Vue.use(Popup); // 弹出层
Vue.use(Area); //省市县选择组件
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
