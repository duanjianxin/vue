import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 状态
const state = {
  count: 1
};
// 改变state状态的方法 mutations
const mutations = {
  add(state, num) {
    state.count += num;
  },
  reduce(state) {
    state.count--;
  }
};
const getters = {
  count(state) {
    return (state.count += 10);
  }
};
const actions = {
  addActions(context) {
    context.commit("add", 10);
    setTimeout(() => {
      context.commit("reduce");
    }, 1000);
  },
  reduceActions({ commit }) {
    commit("reduce");
  }
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
