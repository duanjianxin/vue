import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Classify from "@/views/Classify";
import Cart from "@/views/Cart";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 首页
      path: "/",
      name: "Home",
      component: Home
    },
    {
      // 搜索页
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      // 分类
      path: "/classify",
      name: "Classify",
      component: Classify
    },
    {
      // 购物车
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
});
