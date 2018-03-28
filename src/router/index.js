import Vue from "vue";
import Router from "vue-router";
// 首页
import Home from "@/views/Home";
import Search from "@/views/Search";
// 分类
import Classify from "@/views/Classify";
import ClassifyClassify from "@/views/Classify/Classify";
import OldClassify from "@/views/Classify/OldClassify";
// 购物车
import Cart from "@/views/Cart";
// 我的
import Account from "@/views/Account";

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
      component: Classify,
      children: [
        {
          path: "classify",
          component: ClassifyClassify
        },
        {
          path: "oldClassify",
          name: "OldClassify",
          component: OldClassify
        }
      ]
    },
    {
      // 购物车
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      // 我的
      path: "/account",
      name: "Account",
      component: Account
    }
  ]
});
