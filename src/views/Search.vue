<template>
  <div class="search-warp">
    <div class="m-search-layer">
      <div class="search-hearder">
        <div class="header-left">
          <span class="search-icon"></span>
          <input type="search" id="result-search" autocomplete="off" class="search-input" :placeholder="hotWords.defaultWord" />
          <span class="search-clear result-search-clear none"></span>
        </div>
        <div class="header-right">
          <span class="search-cancel result-search-cancel">取消</span>
        </div>
      </div>
      <div class="placeholder"></div>
      <div class="search-content">
        <div class="search-history-wrap" v-if="hotWords.searchHot.length>0">
          <span class="clear-btn"></span>
          <h3 class="search-hot">历史记录</h3>
          <ul class="history-label-wrap">
            <li v-for="(item,index) in hotWords.searchHot " class="hot-label " :index="index " :value="item ">{{item}}</li>
          </ul>
        </div>
        <div class="search-hot-wrap">
          <h3 class="search-hot">热门搜索</h3>
          <ul class="hot-label-wrap">
            <li v-for="(item,index) in hotWords.hotwords " class="hot-label " :index="index " :value="item ">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="loading-img none"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotWords: {
        defaultWord: "请输入要搜索的商品",
        // 历史记录
        searchHot: ["美妆", "四件套"],
        // 热门搜索
        hotwords: [
          "面膜",
          "衬衣",
          "运动",
          "家电",
          "出行",
          "四件套",
          "美妆",
          "清洁",
          "收纳",
          "数码配件",
          "茶具",
          "丝巾"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.search-warp {
  height: 100%;
  font-size: 12px;
  text-align: center;
  background-color: #f2f2f2;
}
.m-search-layer {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #f2f2f2;
  .search-hearder {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #fff;
    .header-left {
      float: left;
      width: 88%;
      height: 100%;
      position: relative;
      .search-icon {
        position: absolute;
        top: 50%;
        margin-top: -16px;
        left: 10px;
        width: 30px;
        height: 30px;
        background: url(https://static.biyao.com/m/img/icon/search_01_03.png?=biyaocb4f4bc)
          no-repeat center;
        background-size: 50%;
      }
      .search-input {
        width: 95%;
        height: 30px;
        border: 0;
        border-radius: 5px;
        -webkit-appearance: none;
        margin: 7px 0 7px 10px;
        display: block;
        outline: 0;
        padding-left: 30px;
        padding-right: 30px;
        font-size: 15px;
        color: #333;
        background-color: #f2f2f2;
      }
      .search-clear {
        position: absolute;
        top: 50%;
        margin-top: -13px;
        width: 25px;
        height: 25px;
        right: 6px;
        background: #f2f2f2
          url(https://static.biyao.com/m/img/icon/p7.png?=biyao0746dc3)
          no-repeat center;
        background-size: 30%;
      }
    }
    .header-right {
      float: right;
      width: 10%;
      height: 100%;
      margin-right: 2%;
      .search-cancel {
        font-size: 16px;
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        color: #333;
      }
    }
  }
}
.placeholder {
  width: 100%;
  height: 45px;
  margin-bottom: 3px;
}

.search-content {
  padding: 0 10px;
  .search-history-wrap {
    overflow: hidden;
    position: relative;
    .clear-btn {
      position: absolute;
      right: -5px;
      top: 5px;
      width: 30px;
      height: 30px;
      background: url(https://static.biyao.com/m/img/icon/icon_delete-clickable@2x.png?=biyao35cf6fc)
        no-repeat center;
      background-size: 60%;
    }
    .search-hot {
      padding: 10px 0 15px;
      margin: 0;
      font-size: 16px;
      color: #ccb4d5;
      text-align: left;
    }
    ul .hot-label {
      float: left;
      margin-right: 10px;
      margin-bottom: 15px;
      padding: 4px 7px;
      border: 1px solid #ccc;
      border-radius: 5px;
      min-height: 20px;
      line-height: 20px;
    }
  }
  .search-hot {
    padding: 10px 0 15px;
    margin: 0;
    font-size: 16px;
    color: #ccb4d5;
    text-align: left;
  }
  .hot-label-wrap {
    overflow: hidden;
    width: 100%;
    .hot-label {
      float: left;
      margin-right: 10px;
      margin-bottom: 15px;
      padding: 4px 7px;
      border: 1px solid #ccc;
      border-radius: 5px;
      min-height: 20px;
      line-height: 20px;
    }
  }
}
</style>
