// 商品详情
import ShopcarData from "@/mockdata/Shopcar.json";
// initial state
const state = {
  count: 1,
  ShopcarData: ShopcarData,
  // 是否是空购物车 true为空
  Emptylist: ShopcarData.packageList,
  /*
     storeList:[
           name: key,//id号
           ifstoreEdit: true,//编辑true   完成false
           storeCheck: false,// 复选框  选中true   未选中false
           data: [], // 编辑状态
           storeCheckData: [] //复选框状态
     ]
     */
  storeList: []
};
// getters
const getters = {};
// actions
const actions = {
  storeListDataActions({
    commit
  }) {
    commit("STORELISTDATA");
  },
  storeEditActions({
    commit
  }, data) {
    commit("STOREEDIT", data);
  },
  storeCheckChangeActions({
    commit
  }, data) {
    commit("STORECHECKCHANGE", data);
  },
  suCheckChangeActions({
    commit
  }, data) {
    commit("SUCHECKCHANGE", data);
  },
};
// mutations
const mutations = {
  STORELISTDATA(state) {
    for (const key in state.ShopcarData.dic) {
      if (state.ShopcarData.dic.hasOwnProperty(key)) {
        const element = state.ShopcarData.dic[key];
        state.storeList.push({
          name: key,
          ifstoreEdit: false,
          storeCheck: false,
          data: [],
          storeCheckData: []
        });
        for (let index = 0; index < element.length; index++) {
          if (state.storeList.find(element => element.name == key)) {
            state.storeList[
              state.storeList.findIndex(element => element.name == key)
            ].data.push(false);
            state.storeList[
              state.storeList.findIndex(element => element.name == key)
            ].storeCheckData.push(false);
          }
        }
      }
    }
  },
  // 是否点击 编辑按钮
  STOREEDIT(state, data) { //key, index
    state.storeList[data.index].ifstoreEdit = !state.storeList[data.index].ifstoreEdit;
    let datas = state.storeList[data.index].data;
    for (let i = 0; i < datas.length; i++) {
      datas[i] = !datas[i];
    }
  },
  // 是否点击 复选框 商家
  STORECHECKCHANGE(state, data) { //key, index
    state.storeList[data.index].storeCheck = !state.storeList[data.index].storeCheck;
    let datas = state.storeList[data.index].storeCheckData;
    for (let i = 0; i < datas.length; i++) {
      datas[i] = state.storeList[data.index].storeCheck;
    }
  },

  // 是否点击 复选框 商品
  SUCHECKCHANGE(state, data) { //key, index, index2
    if (state.storeList[data.index].storeCheckData) {
      state.storeList[data.index].storeCheckData[data.index2] = !state.storeList[data.index].storeCheckData[data.index2];
      // console.log(state.storeList[data.index].storeCheckData[data.index2]);
    }
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
