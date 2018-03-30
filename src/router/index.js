import Vue from "vue";
import Router from "vue-router";
// 首页
import Home from "@/views/Home";
import Search from "@/views/Search";
// 分类
import Classify from "@/views/Classify";
import ClassifyClassify from "@/views/Classify/Classify";
import OldClassify from "@/views/Classify/OldClassify";
import SuppLierHome from "@/views/Classify/SuppLierHome";
import NewproductList from "@/views/Classify/NewproductList";
import CategoryList from "@/views/Classify/CategoryList";
import MiddlePage from "@/views/Classify/MiddlePage";
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
        },
        // 每日新品
        {
          path: "newproductList",
          name: "NewproductList",
          component: NewproductList
        },
        // 商家主页
        {
          path: "suppLierHome",
          name: "SuppLierHome",
          component: SuppLierHome
        },
        // 类别列表
        {
          path: "categoryList",
          name: "CategoryList",
          component: CategoryList
        },
        // 中间页
        {
          path: "middlePage",
          name: "MiddlePage",
          component: MiddlePage
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
