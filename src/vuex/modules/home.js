// 引入 axios
import axios from "axios";
// Toast 轻提示
import { Toast } from "vant";
// initial state
const state = {
  count: 1,
  homeData: ""
};
// getters
const getters = {
  //返回查看的数据
  platformAssurance: state => {
    return state.homeData.data.platformAssurance;
  }
};
// actions
const actions = {
  getHomedatas({ commit }) {
    axios.get("/api/home").then(data => {
      var res = data.data;
      console.log(res);
      if (res.status == 0) {
        commit("GETHOMEDATAS", res);
      } else {
        Toast(res.msg);
      }
    });
  }
};
// mutations
const mutations = {
  GETHOMEDATAS(state, res) {
    state.homeData = res.result;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
