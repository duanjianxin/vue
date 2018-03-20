import Vue from "vue";
import Router from "vue-router";
import Count from "@/components/count";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    // {
    //   path: "/hellowrld",
    //   name: "HelloWorld",
    //   component: HelloWorld
    // },
    {
      path: "/count",
      name: "Count",
      component: Count
    }
  ]
});
