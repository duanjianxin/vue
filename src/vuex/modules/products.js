// 商品详情
import ProductsData from "@/mockdata/Products.json";

// initial state
const state = {
  count: 1,
  productsData: ProductsData,
  //   默认商品价格
  price: ProductsData.sizeDetail[0].price,
  //   默认生产周期
  duration: ProductsData.sizeDetail[0].duration,
  // 已选择的颜色数量 尺寸
  selectedData: {
    selectedColor: ProductsData.suData.specs[0].des,
    selectedSize: ProductsData.suData.specs[1].des,
    selectedNumb: 1
  },
  //   详情要展示的颜色 尺寸
  product: {
    sizeList: ProductsData.sizeList,
    suData: ProductsData.suData
  },
  location: { city_list: "", county_list: "", province_list: "" }
};
// getters
const getters = {};
// actions
const actions = {
  tabColorActions({ commit }, data) {
    commit("TABCOLOR", data);
  },
  tabSizeActions({ commit }, data) {
    commit("TABSIZE", data);
  },
  additionActions({ commit }) {
    commit("ADDITION");
  },
  subtractionActions({ commit }) {
    commit("SUBTRACTION");
  }
};
// mutations
const mutations = {
  TABCOLOR(state, data) {
    state.selectedData.selectedColor = data.des;
    // console.log(data.des + "===========" + data.specsId);
  },
  TABSIZE(state, data) {
    state.selectedData.selectedSize = data.des;
    // console.log(data.des + "===========" + data.specsId);
  },
  // 数量加 addition
  ADDITION(state) {
    state.selectedData.selectedNumb++;
    // console.log(state.selectedData.selectedNumb);
  },
  // 数量减 subtraction
  SUBTRACTION(state) {
    if (state.selectedData.selectedNumb > 1) {
      state.selectedData.selectedNumb--;
    }
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
