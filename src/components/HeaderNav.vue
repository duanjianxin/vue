<template>
  <div class="header-nav">
    <div class="nav-firstCate">
      <swiper :options="swiperOption" class="swiperOption">
        <swiper-slide class="content nav-active">
          <a href="javascript:;"> 推荐</a>
        </swiper-slide>
        <swiper-slide v-for="(item,index) in sortMenu" class="content" :key="index">
          <a href="javascript:;"> {{item.categoryName}}</a>
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
            <a>推荐</a>
          </li>
          <li class="" v-for="(item,index) in sortMenu" :key="index">
            <a href="javascript:;"> {{item.categoryName}}</a>
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
var dataJson = require("@/mockdata/home.json");
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
      subitemsExpanded: false
    };
  },
  mounted() {
    this.addData();
  },
  methods: {
    addData() {
      for (let i = 0; i < dataJson.oneLevelCategoryList.length; i++) {
        this.sortMenu.push(dataJson.oneLevelCategoryList[i]);
      }
    }
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
}
</style>
