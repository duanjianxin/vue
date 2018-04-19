// 引入 axios
import axios from "axios";
// Toast 轻提示
import { Toast } from "vant";
// initial state
const state = {
  count: 1,
  homeData: null,
  tab: []
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
  moduleItemsModuleTwo: state => {
    if (state.homeData != null) {
      let datas = state.homeData.data.modules;
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].moduleType == 2) {
          return datas[i].moduleInfo;
        }
      }
    }
  },
  moduleItemsModuleOne: state => {
    if (state.homeData != null) {
      let datas = state.homeData.data.modules;
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].moduleType == 1) {
          return datas[i].moduleInfo;
          // console.log(datas[i].moduleInfo);
        }
      }
    }
  },
  moduleItemsModuleThree: state => {
    if (state.homeData != null) {
      let datas = state.homeData.data.modules;
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].moduleType == 3) {
          return datas[i].moduleInfo;
          console.log(datas[i].moduleInfo);
        }
      }
    }
  }
};
// actions
const actions = {
  getHomedatas({ commit }) {
    axios.get("/api/home").then(data => {
      var res = data.data;
      if (res.status == 0) {
        commit("GETHOMEDATAS", res);
      } else {
        Toast(res.msg);
      }
    });
  },
  getTabdatas({ commit }) {
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
