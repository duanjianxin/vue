import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import login from "./modules/login";
import cart from "./modules/cart";
import products from "./modules/products";
// 引入 axios
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { home, login, cart, products }
});
