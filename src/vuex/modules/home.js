// 引入 axios
import axios from "axios";
// Toast 轻提示
import {
  Toast
} from "vant";
// initial state
const state = {
  count: 1,
  homeData: null,
  tab: null
};
// getters
const getters = {
  //返回查看的数据
  platformAssurance: state => {
    if (state.homeData != null) {
      return state.homeData.data.platformAssurance;
    }
  },
  banners: state => {
    if (state.homeData != null) {
      return state.homeData.data.banners;
    }
  },
  tabs: state => {
    if (state.tab != null) {
      return state.tab;
    }
  },
};
// actions
const actions = {
  getHomedatas({
    commit
  }) {
    axios.get("/api/home").then(data => {
      var res = data.data;
      if (res.status == 0) {
        commit("GETHOMEDATAS", res);
      } else {
        Toast(res.msg);
      }
    });
  },
  getTabdatas({
    commit
  }) {
    axios.get("/api/tab").then(data => {
      var res = data.data;
      if (res.status == 0) {
        commit("GETTABDATAS", res);
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
  },
  GETTABDATAS(state, res) {
    state.tab = res.result.data;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
