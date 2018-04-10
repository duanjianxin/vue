import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import cart from "./modules/cart";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { login, cart, products }
});
