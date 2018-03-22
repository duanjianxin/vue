import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Search from "@/views/Search";

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
    }
  ]
});
