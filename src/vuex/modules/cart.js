// 商品详情
import ShopcarData from "@/mockdata/Shopcar.json";
import { Dialog } from "vant"; //弹出框

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
  storeList: [],
  // 是否全选
  CheckAll: false
};
// getters
const getters = {};
// actions
const actions = {
  storeListDataActions({ commit }) {
    commit("STORELISTDATA");
  },
  storeEditActions({ commit }, data) {
    commit("STOREEDIT", data);
  },
  storeCheckChangeActions({ commit }, data) {
    commit("STORECHECKCHANGE", data);
  },
  suCheckChangeActions({ commit }, data) {
    commit("SUCHECKCHANGE", data);
  },
  CheckAllActions({ commit }) {
    commit("CHECKALL");
  },
  ifCheckAllActions({ commit }) {
    commit("IFCHECKALL");
  },
  // 商品数量加
  addProductActions({ commit }, data) {
    commit("ADDPRODUCT", data);
  },
  // 商品数量减
  minuProductActions({ commit }, data) {
    commit("MINUSPRODUCT", data);
  },
  // 商品删除
  delProductActions({ commit }, data) {
    commit("DELPRODUCT", data);
  }
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
            ].storeCheckData.push({ isSelected: false });
          }
        }
      }
    }
  },
  // 是否点击 编辑按钮
  STOREEDIT(state, data) {
    //key, index
    state.storeList[data.index].ifstoreEdit = !state.storeList[data.index]
      .ifstoreEdit;
    let datas = state.storeList[data.index].data;
    for (let i = 0; i < datas.length; i++) {
      datas[i] = !datas[i];
    }
  },
  // 是否点击 复选框 商家
  STORECHECKCHANGE(state, data) {
    //key, index
    state.storeList[data.index].storeCheck = !state.storeList[data.index]
      .storeCheck;
    let datas = state.storeList[data.index].storeCheckData;
    for (let i = 0; i < datas.length; i++) {
      datas[i].isSelected = state.storeList[data.index].storeCheck;
    }
    // 调用判断是否全选方法
    mutations.IFCHECKALL(state);
  },
  // 是否点击 复选框 商品
  SUCHECKCHANGE(state, data) {
    //key, index, index2
    state.storeList[data.index].storeCheckData[data.index2].isSelected = !state
      .storeList[data.index].storeCheckData[data.index2].isSelected;
    let fordata = state.storeList[data.index].storeCheckData;
    for (let i = 0; i < fordata.length; i++) {
      if (fordata.length > 1) {
        if (fordata.every(x => x.isSelected == true)) {
          state.storeList[data.index].storeCheck = fordata[i].isSelected;
        } else {
          state.storeList[data.index].storeCheck = false;
        }
      } else {
        state.storeList[data.index].storeCheck = fordata[i].isSelected;
      }
    }
    // 调用判断是否全选方法
    mutations.IFCHECKALL(state);
  },
  // 全选
  CHECKALL(state) {
    state.CheckAll = !state.CheckAll;
    let datas = state.storeList;
    for (let i = 0; i < datas.length; i++) {
      state.storeList[i].storeCheck = state.CheckAll;
      if (state.CheckAll == true) {
        isCheck(true);
      } else {
        isCheck(false);
      }
      function isCheck(data) {
        for (let j = 0; j < state.storeList[i].storeCheckData.length; j++) {
          state.storeList[i].storeCheckData[j].isSelected = data;
        }
      }
    }
  },
  // 判断是否全选
  IFCHECKALL(state) {
    let datas = state.storeList;
    for (let i = 0; i < datas.length; i++) {
      if (datas.every(x => x.storeCheck == true)) {
        state.CheckAll = true;
      } else {
        state.CheckAll = false;
      }
    }
  },
  // 商品数量加
  ADDPRODUCT(state, data) {
    console.log(data);
    state.ShopcarData.dic[data.key][data.index2].shopCar.num++;
  },
  // 商品数量减
  MINUSPRODUCT(state, data) {
    if (state.ShopcarData.dic[data.key][data.index2].shopCar.num > 1) {
      state.ShopcarData.dic[data.key][data.index2].shopCar.num--;
    }
  },
  // 商品删除
  DELPRODUCT(state, data) {
    let datas = state.ShopcarData;

    // Dialog.confirm({
    //   message: "确定要删除该商品吗？"
    // })
    //   .then(() => {
    //     // on confirm
    //     console.log("删除");
    //   })
    //   .catch(() => {});
    function delpRoduct(datas, data) {
      for (const key in datas.dic) {
        if (datas.dic.hasOwnProperty(key)) {
          const element = datas.dic[key];
          if (key == data.key) {
            console.log(datas.dic[key].isArray);
            console.log(element);
          }
        }
      }
    }
    delpRoduct(datas, data);
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
