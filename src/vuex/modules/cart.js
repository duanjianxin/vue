// 商品详情
import ShopcarData from "@/mockdata/Shopcar.json";
// initial state
const state = {
  count: 1,
  ShopcarData: ShopcarData,
  // 是否是空购物车 true为空
  Emptylist: ShopcarData.packageList
};
// getters
const getters = {};
// actions
const actions = {};
// mutations
const mutations = {
  tabStoreEdit() {

  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
