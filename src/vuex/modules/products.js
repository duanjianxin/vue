// 引入 axios
import axios from "axios";
// 商品详情
import ProductsData from "@/mockdata/Products.json";
// initial state
const state = {
  count: 1,
  productsData: ProductsData,
  //   默认商品价格
  price: 0,
  //   默认生产周期
  duration: 0,
  // 已选择的颜色数量 尺寸
  selectedData: {
    selectedColor: "",
    selectedSize: "",
    selectedNumb: 1
  },
  //   详情要展示的颜色 尺寸
  product: {
    sizeList: Object,
    suData: Object
    // sizeList: ProductsData.sizeList,
    // suData: ProductsData.suData
  },
  // 是否显示地址选择
  showBase: false,
  location: {
    city_list: "",
    county_list: "",
    province_list: ""
  }
};
// getters
const getters = {};
// actions
const actions = {
  getProduct({ commit }) {
    axios.get("/products").then(data => {
      var res = data.data;
      if (res.status == 0) {
        commit("GETPRODUCT", res);
      } else {
        Toast(res.msg);
      }
    });
  },
  // 地址选择显示
  showBasesActions({ commit }) {
    commit("SHOWBASES");
  },
  // 地址选择隐藏
  cancelAreaActions({ commit }) {
    commit("SHOWBASES");
  },
  confirmAreaActions({ commit }, data) {
    commit("CONFIRMAREA", data);
  },
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
  GETPRODUCT(state, res) {
    state.productsData = res.result.data[0];
    state.price = res.result.data[0].sizeDetail[0].price;
    state.duration = res.result.data[0].sizeDetail[0].duration;
    state.selectedData.selectedColor = res.result.data[0].suData.specs[0].des;
    state.selectedData.selectedSize = res.result.data[0].suData.specs[1].des;
    state.product.sizeList = res.result.data[0].sizeList;
    state.product.suData = res.result.data[0].suData;
  },
  //定位 取消 确定
  SHOWBASES(state) {
    state.showBase = !state.showBase;
  },
  //定位 重新选择
  CONFIRMAREA(state, data) {
    if (data[0].code == "-1" || data[1].code == "-1" || data[2].code == "-1") {
      alert("地址选择有误！");
    } else {
      state.location.city_list = data[0].name;
      state.location.county_list = data[1].name;
      state.location.province_list = data[2].name;
      state.showBase = !state.showBase;
    }
  },
  // 颜色选择
  TABCOLOR(state, data) {
    state.selectedData.selectedColor = data.des;
  },
  // 尺寸选择
  TABSIZE(state, data) {
    state.selectedData.selectedSize = data.des;
  },
  // 数量加 addition
  ADDITION(state) {
    state.selectedData.selectedNumb++;
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
