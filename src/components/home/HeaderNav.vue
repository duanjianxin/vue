<template>
  <div class="header-nav">
    <div class="nav-firstCate">
      <swiper :options="swiperOption" class="swiperOption">
        <swiper-slide class="content ">
          <router-link :to="{path:'/'}">推荐</router-link>
        </swiper-slide>
        <swiper-slide v-for="(item,index) in sortMenu" :key="index" class="content" :class="{'nav-active':categoryName===item.categoryName}">
          <router-link :to="{path:'/classify/oldClassify',query: {
            categoryId: item.categoryId}}">
            {{item.categoryName}}
          </router-link>
        </swiper-slide>
      </swiper>
      <span class="iconfont icon-arrow" v-bind:class="[subitemsExpanded ? 'icon-less' : 'icon-moreunfold ']" id="slide-on" v-on:click="subitemsExpanded=!subitemsExpanded"></span>
    </div>
    <div class="category-box none" id="category-box" v-show="subitemsExpanded">
      <div class="cate-title">
        <span>全部频道</span>
        <i class="iconfont icon-arrow" id="slide-off" v-bind:class="[subitemsExpanded ? ' icon-less' : 'icon-moreunfold']" v-on:click="subitemsExpanded=!subitemsExpanded"></i>
      </div>
      <div class="cate-detail">
        <ul>
          <li class="_active">
            <router-link :to="{path:'/'}">推荐</router-link>
          </li>
          <li class="" v-for="(item,index) in sortMenu" :key="index">
            <a href="javascript:;"> {{item.categoryName}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-secondCate" v-if="subCategoryList.subCategoryList&&subCategoryList.subCategoryList.length>0">
      <div style="touch-action: pan-y pinch-zoom;">
        <ul class="">
          <li v-for="(item,index) in subCategoryList.subCategoryList" :key="index" :class="classObject(item,index)">
            <router-link :to="{path:'/classify/oldClassify',query: {
            categoryId: item.categoryId}}">
              {{item.categoryName}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
var dataJson = require("@/mockdata/cateTabGuycateList.json");
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      sortMenu: [],
      subCategoryList: [],
      subitemsExpanded: false,
      categoryId: "0", //当前路由id
      categoryName: "" //当前类名
    };
  },
  mounted() {
    this.addData();
    this.getParams();
    // console.log(dataJson);
    // console.log(this.sortMenu);
  },
  computed: {
    ...mapGetters(["tabs"])
  },
  methods: {
    addData() {
      for (let i = 0; i < dataJson.length; i++) {
        this.sortMenu.push({
          categoryName: dataJson[i].categoryName,
          categoryId: dataJson[i].categoryId,
          categoryType: dataJson[i].categoryType,
          jumpType: dataJson[i].jumpType,
          subCategoryList: dataJson[i].subCategoryList,
          show: false
        });
      }
    },
    getParams() {
      this.OldcategoryId = this.categoryId;
      // 取到路由带过来的参数
      let routerParamsCategoryId = this.$route.query.categoryId;
      // 将数据放在当前组件的数据内
      this.categoryId = routerParamsCategoryId;
      for (let i = 0; i < dataJson.length; i++) {
        if (routerParamsCategoryId == dataJson[i].categoryId) {
          this.subCategoryList = dataJson[i];
          this.categoryName = dataJson[i].categoryName;
        }
      }
    },
    classObject(item, index) {
      if (index >= 0) {
        if (this.categoryId == item.categoryId) {
          return "secondCate-active";
        } else {
          if (
            index == 0 &&
            this.categoryId == this.subCategoryList.categoryId
          ) {
            return "secondCate-active";
          }
        }
      }
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
    // tabs: function(val) {
    //   console.log(val);
    // }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.header-nav {
  position: relative;
  margin-top: 0.12rem;
  font-size: 0.3rem;
  .nav-firstCate {
    position: relative;
    padding-right: 1.04rem;
    .swiperOption {
      padding-left: 0.2rem;
    }
    .content {
      height: 0.74rem;
      a {
        display: block;
        height: 0.7rem;
        padding: 0 0.2rem;
        position: relative;
        border-bottom: 0.04rem solid transparent;
        line-height: 0.74rem;
        text-align: center;
        font-size: 0.3rem;
        color: gray;
      }
    }
    .nav-active a {
      border-bottom: 0.04rem solid #7f4395;
      color: #7f4395;
    }
    .icon-arrow {
      position: absolute;
      top: 0.15rem;
      right: 0.4rem;
      width: 0.24rem;
      height: 0.15rem;
    }
  }

  //   展示后
  .category-box {
    font-family: PingFangSC;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: #fff;
    transition: top 0.2s;
    -webkit-transition: top 0.2s;
    .cate-title {
      position: relative;
      height: 0.88rem;
      padding-left: 0.2rem;
      border-bottom: 1px solid #ccc;
      span {
        float: left;
        line-height: 0.88rem;
        font-size: 0.24rem;
        color: gray;
      }
      .icon-arrow {
        position: absolute;
        top: 0.15rem;
        right: 0.4rem;
        width: 0.24rem;
        height: 0.15rem;
      }
    }
    .cate-detail,
    .cate-detail ul {
      width: 100%;
      li {
        float: left;
        margin-bottom: 0.2rem;
        margin-top: 0.2rem;
        a {
          display: inline-block;
          border: 0.01rem solid gray;
          border-radius: 0.24rem;
          height: 0.48rem;
          min-width: 1.28rem;
          text-align: center;
          line-height: 0.46rem;
          font-size: 0.24rem;
          margin-left: 0.2rem;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
        }
      }
      li._active a {
        color: #7f4395;
        border-color: #7f4395;
      }
    }
  }

  //
  .nav-secondCate {
    padding-left: 0.2rem;
    overflow: hidden;
    background: #f7f7f7;
    div {
      width: 7.3rem;
      ul {
        height: 0.89rem;
        overflow: hidden;
        li {
          float: left;
          padding: 0.2rem 0.2rem 0 0;
          a {
            display: block;
            height: 0.46rem;
            padding: 0 0.2rem;
            border: 0.01rem solid #7f4395;
            border-radius: 0.28rem;
            line-height: 0.46rem;
            text-align: center;
            font-size: 0.24rem;
            min-width: 0.73rem;
            color: #7f4395;
            -webkit-box-size: border-box;
            box-size: border-box;
          }
        }
        li.secondCate-active a {
          border: 0.01rem solid transparent;
          background: #7f4395;
          color: #fff;
        }
      }
    }
  }
}
</style>
