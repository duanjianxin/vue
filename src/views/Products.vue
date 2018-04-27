<template>
  <div>
    <div class="editor-wrap">
      <ul class="tabs">
        <li class="commodity active">
          <img class="dingwei tabs1" src="https://static.biyao.com/m/img/product/dingwei.png?=biyao0dc5b9b"> 商品
        </li>
        <li class="evaluate">
          <img class="dingwei" src="https://static.biyao.com/m/img/product/dingwei.png?=biyao0dc5b9b"> 评价
        </li>
        <li class="details">
          <img class="dingwei" src="https://static.biyao.com/m/img/product/dingwei.png?=biyao0dc5b9b"> 详情
        </li>
        <li class="recommend">
          <img class="dingwei" src="https://static.biyao.com/m/img/product/dingwei.png?=biyao0dc5b9b"> 推荐
        </li>
      </ul>
      <div class="gl-wrap">
        <!-- 1.商品部分 -->
        <div id="commodity">
          <!-- 轮播区域 -->
          <div class="gl-slider">
            <!-- 图片轮播 -->
            <div class="gl-img-slider" style="transform-style: preserve-3d; position: relative;">
              <van-swipe :show-indicators="false" @change="onBannersChange">
                <van-swipe-item v-for="(image, index) in bannerImgs" :key="index">
                  <img v-lazy="image.largeImg" style="width: 100%;" />
                </van-swipe-item>
              </van-swipe>
              <!-- 签字、验光等按钮区域 -->
              <div class="slider-btn-wrap">
              </div>
              <ol class="banner-item">
                <li class="">
                  <span>{{bannerIndex}}</span>/{{bannerImgs.length}}</li>
              </ol>
            </div>
          </div>
          <!-- 编辑器基本数据 -->
          <section class="gl-detial-wrap">
            <div class="gl-title">{{data.longProductName}}</div>
            <div class="gl-salePoint">{{data.productSale}}</div>
            <div class="price-duration-wrap">
              <div class="gl-price-duration-wrap">
                <div class="gl-price">￥
                  <span>{{this.$store.state.products.price}}</span>
                </div>

                <div class="gl-send-friends red-envelops-wrap">
                  <a href="javascript:;">
                    <span>送好友</span>
                  </a>
                </div>
              </div>
              <div class="gl-duration-wrap">
                <span class="gl-duration-icon">
                  <img src="https://static.biyao.com/m/img/base/produce_cycle.png?=biyao015ebc2">
                </span>
                <span class="gl-duration">生产周期：{{this.$store.state.products.duration}}天</span>
              </div>
            </div>
          </section>
          <!-- 制造商标签 -->

          <section class="maker-label">
            <span class="labels">{{data.supplierBackground}}</span>
          </section>

          <!-- 服务协议 -->
          <section class="gl-service-wrap">
            <ul class="gl-service-list">
              <li>
                <i class="iconfont icon-assessedbadge"></i>
                7天无忧退换
              </li>
              <li>
                <i class="iconfont icon-assessedbadge"></i>
                先行赔付
              </li>
              <li>
                <i class="iconfont icon-assessedbadge"></i>
                超时赔偿
              </li>
              <li>
                <i class="iconfont icon-assessedbadge"></i>
                顺丰包邮
              </li>
              <li class="gl-more">
                <i class="iconfont icon-more"></i>
              </li>
            </ul>

          </section>
          <!-- 已选规格 -->
          <section class="gl-range-warp choosed-size-wrap" @click="showProduct">
            <div class="standard">
              <span>已选择：&nbsp;</span>
              <div class="choosed-size-Exhibition">{{this.$store.state.products.selectedData.selectedColor}}，{{this.$store.state.products.selectedData.selectedSize}}，{{this.$store.state.products.selectedData.selectedNumb}}件</div>
            </div>
            <span class="gl-more">
              <i class="iconfont icon-more"></i>
            </span>
          </section>
          <!-- 定位 -->
          <section class="my-address" id="my-address" @click="showBasesActions">
            <div class="padding_1">
              <div class="my-send clear">
                <b>配送至：&nbsp;</b>
                <span class="gl-location">
                  <img src="https://static.biyao.com/m/img/product/dingwei.png?=biyao0dc5b9b">
                </span>
                <b id="distribution-location" v-if="this.$store.state.products.location.city_list!=''&&this.$store.state.products.location.county_list!=''&&this.$store.state.products.location.province_list!=''">
                  {{this.$store.state.products.location.city_list+this.$store.state.products.location.county_list+this.$store.state.products.location.province_list}}
                </b>
                <b id="distribution-location" v-else>
                  广东省 深圳市 南山区
                </b>
              </div>
              <div class="location-til">
                <b>配送至：&nbsp;</b>
                <span>可配送</span>
              </div>
            </div>
            <span class="gl-more">
              <i class="iconfont icon-more"></i>
            </span>
          </section>
          <!-- 尺码对照表 -->
          <section class="gl-range-warp gl-Size-warp" @click="sizeForm">
            <div class="size-form">尺码对照表</div>
            <span class="gl-more">
              <i class="iconfont icon-more"></i>
            </span>
          </section>
        </div>
        <!--  3.详情details -->
        <!-- 商品详情 -->
        <div id="details">
          <div class="gl-product-detial-wrap">
            <div class="gl-product-detial gl-comment-title">
              <span>详情</span>
            </div>
          </div>
          <div class="pro-detial" v-html="data.productMdetail">
          </div>
        </div>
      </div>
      <!-- 尺码对照表 -->
      <div class="size-surface-wrap" @click="sizeForm" v-if="showSizeForm">
        <div class="bg-corver-size-surface"></div>
        <div class="size-surface-img-wrap">
          <img class="size-surface-img img-lazyload" :src="data.sizeTableImg" onerror="javascript:this.src='https://static.biyao.com/m/img/base/nullpic.png'">
        </div>
      </div>
    </div>
    <GoodsAction></GoodsAction>
    <van-popup v-model="$store.state.products.showBase" position="bottom">
      <van-area :area-list="areaLists" @confirm="confirmAreaActions" @cancel="cancelAreaActions" />
    </van-popup>
    <ReturnTop></ReturnTop>
    <van-popup v-model="showProducts" position="bottom">
      <ChooseProducts @showProduct="showProduct"></ChooseProducts>
    </van-popup>
  </div>
</template>
<script>
import store from "@/vuex/index";
import { mapMutations, mapActions } from "vuex";
import GoodsAction from "@/components/Products/GoodsAction";
import ChooseProducts from "@/components/Products/ChooseProducts";
import ReturnTop from "@/components/ReturnTop";
import { Toast } from "vant";
import http from "@/util/http";
import api from "@/util/api";
export default {
  data() {
    return {
      showSizeForm: false, //尺码对照表显示隐藏
      bannerIndex: 1,
      data: this.$store.state.products.productsData,
      bannerImgs: this.$store.state.products.productsData.imgList,
      areaLists: null, //省市区数据
      showProducts: false
    };
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    this.getProduct();
    this.fetchData(); //方法2   组件内请求banners数据
  },
  methods: {
    ...mapActions([
      "getProduct",
      "confirmAreaActions",
      "showBasesActions",
      "cancelAreaActions"
    ]),
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.areas, params);
      if (res.data.status == 0) {
        this.areaLists = res.data.result.data;
        // console.log(res.data.result.data);
      }
    },
    // 当前banner下标
    onBannersChange(index) {
      this.bannerIndex = index + 1;
    },
    // 尺码对照表显示隐藏
    sizeForm() {
      this.showSizeForm = !this.showSizeForm;
    },
    showProduct() {
      this.showProducts = !this.showProducts;
    }
  },
  // mounted() {
  //   // console.log(this.$store.state.products.productsData);
  //   // console.log(this.$store.state.products.showBase);
  // },
  components: {
    GoodsAction,
    ReturnTop,
    ChooseProducts
  },
  store
};
</script>

<style lang="scss"  type="text/css">
.clear::after {
  content: "";
  clear: both;
  display: block;
  width: 0;
  visibility: hidden;
}
.editor-wrap {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, helvetica, "Heiti SC";
  ul.tabs {
    position: fixed;
    top: 0;
    opacity: 0;
    width: 100%;
    z-index: 1;
    height: 0.7rem;
    line-height: 0.7rem;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -webkit-align-items: center;
    padding: 0 0.2rem;
    box-shadow: 0 0 6px #dcc0de;
    -webkit-box-shadow: 0 0 6px #dcc0de;
    transform: scaleY(0);
    -webkit-transform: scaleY(0);
    li {
      text-align: center;
      color: #353535;
      font-size: 0.28rem;
      .dingwei {
        width: 0.24rem;
        height: 0.24rem;
        position: relative;
        top: 0.02rem;
        opacity: 0;
      }
    }
    li.active {
      color: #7e4395;
      opacity: 1;
    }
  }
  .gl-wrap {
    margin-bottom: 0.96rem;
    section {
      padding: 0 0.2rem;
    }
    // <!-- 1.商品部分 -->
    #commodity {
      .gl-slider {
        width: 100%;
        position: relative;
        height: 7.5rem;
        overflow: hidden;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        perspective: 50000px;
        -webkit-perspective: 50000px;
        -moz-perspective: 50000px;
        transform-origin: center center;
        -webkit-transform-origin: center center;
        -moz-transform-origin: center center;
        .gl-img-slider,
        .gl-3D-slider {
          position: relative;
          width: 7.5rem;
          height: 7.5rem;
          overflow: hidden;
        }
        .gl-img-slider .banner-item {
          position: absolute;
          right: 0.2rem;
          bottom: 0.2rem;
          width: 1.12rem;
          height: 0.44rem;
          line-height: 0.44rem;
          background-color: rgba(0, 0, 0, 0.3);
          color: #fff;
          text-align: center;
          border-radius: 0.22rem;
          z-index: 99999;
          span,
          li {
            color: #fff;
          }
        }
        .gl-img-slider ul {
          height: 7.5rem;
          img {
            display: block;
            width: 7.5rem;
            height: 7.5rem;
          }
          li {
            float: left;
            height: 7.5rem;
            a {
              display: block;
              width: 7.5rem;
              height: 7.5rem;
            }
            img {
              display: block;
              width: 7.5rem;
              height: 7.5rem;
            }
          }
        }
      }
      // <!-- 编辑器基本数据 -->
      .gl-detial-wrap {
        background-color: #fff;
        border-bottom: 1px solid #eee;
        .gl-title {
          font-family: PingFang-SC-Medium;
          font-size: 0.32rem;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.35;
          color: #353535;
          padding-top: 0.2rem;
          margin-bottom: 0.1rem;
        }
        .gl-salePoint {
          font-size: 0.24rem;
          color: #6f6f6f;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.5;
          padding-bottom: 0.04rem;
        }
        .price-duration-wrap {
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          -webkit-justify-content: space-between;
          height: 0.8rem;
          line-height: 0.8rem;
          align-items: center;
          -webkit-align-items: center;
          .gl-price-duration-wrap {
            display: flex;
            display: -webkit-flex;
            align-items: center;
            -webkit-align-items: center;
            .gl-price {
              font-family: PingFang-SC-Medium;
              font-size: 0.32rem;
              color: #f33;
              span {
                font-family: PingFang-SC-Medium;
                font-size: 0.46rem;
                color: #f33;
                line-height: 2;
              }
            }
            .gl-send-friends {
              width: 1.18rem;
              height: 0.38rem;
              line-height: 0.38rem;
              border: 1px solid #e7b32d;
              border-radius: 0.08rem;
              margin-left: 0.3rem;
              position: relative;
              a {
                display: block;
                color: #e7b32d;
                .icon {
                  font-size: 0.26rem;
                  position: absolute;
                  top: 0.04rem;
                  left: 0.04rem;
                }
                span {
                  display: block;
                  padding-left: 0.32rem;
                  font-size: 0.24rem;
                }
              }
            }
          }
          .gl-duration-wrap {
            font-size: 0.24rem;
            color: #6f6f6f;
            line-height: 0.37rem;
            height: 0.37rem;
            .gl-duration-icon {
              display: inline-block;
              width: 0.24rem;
              height: 0.24rem;
              margin-right: 0.05rem;
              position: relative;
              top: 0.03rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      // <!-- 制造商标签 -->
      .maker-label {
        height: 0.72rem;
        // width: 100%;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        .labels {
          font-size: 0.24rem;
          font-family: PingFangSC-Regular, helvetica, "Heiti SC";
          border: 1px solid #4f93e2;
          border-radius: 0.28rem;
          height: 0.3rem;
          line-height: 0.28rem;
          color: #4f93e2;
          padding: 0 0.1rem;
          display: block;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      // <!-- 服务协议 -->
      .gl-service-wrap {
        height: 0.8rem;
        // width: 100%;
        line-height: 0.8rem;
        background-color: #fafafa;
        .gl-service-list {
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          -webkit-justify-content: space-between;
          align-items: flex-start;
          -webkit-align-items: flex-start;
          li {
            color: #828282;
            i {
              color: #7e4395;
            }
          }
          li.gl-more {
            i {
              color: #828282;
            }
          }
        }
      }
      // <!-- 已选规格 -->
      .gl-range-warp {
        position: relative;
        height: 0.9rem;
        // width: 100%;
        line-height: 0.9rem;
        background-color: #fff;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: flex-start;
        -webkit-align-items: flex-start;
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        color: #828282;
        .standard {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: flex;
          display: -webkit-flex;
          span {
            color: #828282;
            font-size: 0.24rem;
          }
          .choosed-size-Exhibition {
            color: #353535;
            font-size: 0.24rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .gl-more {
          font-size: 0.24rem;
          color: gray;
          line-height: 0.9rem;
        }
      }
      // <!-- 定位 -->
      .my-address {
        background-color: #fff;
        position: relative;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: center;
        -webkit-align-items: center;
        .padding_1 {
          padding: 0.12rem 0 0.1rem;
        }
        .my-send {
          font-size: 0;
          b {
            display: inline-block;
            font-family: PingFang-SC-Medium;
            font-size: 0.24rem;
            color: #828282;
            line-height: 1;
            overflow: hidden;
          }
          .gl-location {
            font-size: 0.32rem;
            color: gray;
            img {
              width: 0.24rem;
              height: 0.24rem;
              position: relative;
              top: 0.02rem;
            }
          }
          #distribution-location {
            width: 5.1rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #353535;
          }
        }
        .location-til {
          font-family: PingFang-SC-Medium;
          b {
            font-family: PingFangSC-Regular, helvetica, "Heiti SC";
            font-size: 0.3rem;
            color: #333;
            line-height: 1;
            opacity: 0;
          }
          span {
            color: #f33;
            font-size: 0.22rem;
            line-height: 1;
            font-family: PingFangSC-Regular, helvetica, "Heiti SC";
          }
        }
      }
      // <!-- 尺码对照表 -->
      .gl-range-warp {
        position: relative;
        height: 0.9rem;
        // width: 100%;
        line-height: 0.9rem;
        background-color: #fff;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-justify-content: space-between;
        align-items: flex-start;
        -webkit-align-items: flex-start;
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        color: #828282;
        .gl-more {
          font-size: 0.24rem;
          color: gray;
          line-height: 0.9rem;
        }
      }
    }

    // <!--  3.详情details -->
    // <!-- 商品详情 -->
    #details {
      .gl-product-detial-wrap {
        height: 0.78rem;
        width: 100%;
        background-image: url(https://static.biyao.com/m/img/product/goods_details.png?=biyao29e3bdb);
        background-size: 100% 100%;
        .gl-product-detial {
          position: absolute;
        }
        .gl-comment-title {
          height: 0.78rem;
          width: 100%;
          line-height: 0.78rem;
          text-align: center;
          color: #fff;
          text-indent: 2em;
          span {
            position: relative;
          }
        }
      }
      .pro-detial {
        .txq_container {
          background: #eee;
          .txq_header {
            padding: 0.2rem;
            margin-bottom: 0.2rem;
            background: #fff;
            .txq_item {
              border-bottom: 1px dotted #d9d9d9;
              line-height: 0.6rem;
              font-size: 0.28rem;
              text-align: left;
              padding: 0.16rem 0.36rem;
              dl {
                margin: 0;
                dt {
                  float: left;
                  width: 2.24rem;
                  color: #828282;
                }
                dd {
                  margin-left: 2.3rem;
                  color: #353535;
                }
              }
            }
          }
          .txq_details {
            padding: 0 0.2rem;
            line-height: 1.5;
            font-size: 0.28rem;
            overflow: hidden;
            background: #fff;
            p {
              word-break: break-all;
              img {
                display: block;
              }
            }
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
  }

  // <!-- 尺码对照表 -->
  .my-popuse-wrap,
  .supplier-services-explain-wrap,
  .sign-wrap,
  .exhibition-wrap,
  .size-surface-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    .gl-bg-corver,
    .gl-bg-corver-supplier,
    .gl-bg-corver-exhibition,
    .bg-corver-size-surface {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: 90;
    }
    .size-surface-img-wrap {
      width: 6.4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      -webkit-transform: translate3d(-50%, -50%, 0);
      .size-surface-img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
