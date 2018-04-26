<template>
  <div class="choose-size-wrap choose-size-wrap-fadeIn">
    <!-- 选择度数弹框头部 -->
    <div class="choose-size-top">
      <img class="choose-size-top-img" src="https://bfs.biyao.com/group1/M00/2C/09/rBACW1pwU-KAR608AAEi1JR_7X0969_400x400.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/base/zwpic.png'" alt="">
      <div class="choose-size-title-price">
        <div class="choose-size-price-text">￥
          <span class="choose-size-price">{{$store.state.products.product.suData.price}}</span>
        </div>
        <div class="choose-size-duration-text">生产周期：
          <span class="choose-size-duration">{{$store.state.products.product.suData.duration}}</span>天</div>
        <div class="choose-size-choosed-style">
          <span class="choose-size-choosed-tit">已选择：</span>
          <div class="choose-size-choosed-text">{{this.$store.state.products.selectedData.selectedColor}}，{{this.$store.state.products.selectedData.selectedSize}}，{{this.$store.state.products.selectedData.selectedNumb}}件</div>
        </div>
      </div>
      <div class="close-choose-size">
        <i class="iconfont icon-wrong" @click="closedBtn"></i>
      </div>
    </div>
    <div class="gl-choose-lens-content-wrap">
      <!-- 选择规格主体 -->
      <div class="choose-size-content" v-if="$store.state.products.product.sizeList.normalSpecs">
        <div class="choose-title-wrap">
          <span class="lens-text">颜色</span>
          <span class="lens-choosed">（已选：
            <i class="lens-choosed-s">{{this.$store.state.products.selectedData.selectedColor}}</i>）</span>
          <div class="Specs-list">
            <div class="specs-detial-normalSpecs" :class="{'specs-detial-checked':$store.state.products.selectedData.selectedColor==item.des}" :id="item.specsId" v-for="(item,index) in $store.state.products.product.sizeList.normalSpecs[0].specs" :key="index" @click="tabColorActions({des:item.des,specsId:item.specsId})">{{item.des}}</div>
          </div>
        </div>
        <div class="choose-title-wrap">
          <span class="lens-text">{{$store.state.products.product.sizeList.normalSpecs[1].name}}</span>
          <span class="lens-choosed">（已选：
            <i class="lens-choosed-s">{{this.$store.state.products.selectedData.selectedSize}}</i>）</span>
          <div class="Specs-list">
            <div class="specs-detial-normalSpecs" :class="{'specs-detial-checked':$store.state.products.selectedData.selectedSize==item.des}" :id="item.specsId" v-for="(item,index) in $store.state.products.product.sizeList.normalSpecs[1].specs" :key="index" @click="tabSizeActions({des:item.des,specsId:item.specsId})">{{item.des}}</div>
          </div>
        </div>
        <!-- 选择数量 -->
        <div class="choose-num-wrap">
          <div class="choose-num-test">购买数量</div>
          <div class="contral-num">
            <div class="count-reduce" :class="{'count-disabled':this.$store.state.products.selectedData.selectedNumb<=1}" @click="subtractionActions">
              <span class="count-horizontal"></span>
            </div>
            <div class="buy-count">{{this.$store.state.products.selectedData.selectedNumb}}</div>
            <div class="count-add" @click="additionActions">
              <span class="count-horizontal"></span>
              <span class="count-vertical"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="choose-size-bottom">
      <ul class="choose-bottom-btn-wrap choose-bootom-btn-con">
        <li class="buy-shopcar-choose">加入购物车</li>
        <li class="buy-now-choose">立即购买</li>
        <li class="no-store-btn none">原材料库存不足</li>
        <li class="give-red-bag none">送好友</li>
      </ul>
      <div class="buy-shopcar-choose-sure none">确定</div>
      <div class="buy-now-choose-sure none">确定</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  // props: ["product", "selectedData"],
  data() {
    return {
      msg: "ChooseProducts"
    };
  },
  methods: {
    ...mapActions([
      "tabColorActions",
      "tabSizeActions",
      "additionActions",
      "subtractionActions"
    ]),
    // 点击叉叉调用父组件方法
    closedBtn() {
      this.$emit("showProduct");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped="" type="text/css">
.choose-size-wrap,
.supplier-services-detial-wrap {
  font-size: 0.24rem;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 9rem;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  .choose-size-top {
    position: relative;
    width: 100%;
    height: 2.2rem;
    background-color: #fff;
    z-index: 10;
    .choose-size-top-img {
      position: absolute;
      top: -0.23rem;
      left: 0.2rem;
      width: 2.14rem;
      height: 2.14rem;
      border: 1px solid #ccc;
      background-color: #fff;
      max-width: 100%;
    }
    .choose-size-title-price {
      margin-left: 2.57rem;
      padding-top: 0.2rem;
      width: 4.7rem;
      .choose-size-price-text,
      .choose-size-price-text span {
        font-size: 0.36rem;
        color: #f33;
      }
      .choose-size-duration-text {
        margin: 0.12rem 0;
        color: gray;
        span {
          color: gray;
        }
      }
      .choose-size-choosed-style {
        position: relative;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        .choose-size-choosed-tit {
          position: absolute;
          color: #828282;
          font-size: 0.24rem;
        }
        .choose-size-choosed-text {
          text-indent: 0.96rem;
        }
      }
    }
    .close-choose-size {
      position: absolute;
      top: 0;
      right: 0.24rem;
      width: 0.44rem;
      height: 0.44rem;
      font-size: 0.44rem;
      i {
        font-size: 0.42rem;
      }
    }
  }
  .choose-size-top::after {
    content: "";
    position: absolute;
    left: 50%;
    border-top: 1px solid #ccc;
    bottom: 0;
    width: 95%;
    height: 1px;
    transform: translate3d(-50%, 0, 0) scaleY(0.5);
    -webkit-transform: translate3d(-50%, 0, 0) scaleY(0.5);
  }
}

.gl-choose-lens-content-wrap {
  position: relative;
  .choose-size-content {
    position: relative;
    // width: 100%;
    padding: 0.4rem 0.2rem;
    padding-top: 0;
    overflow-y: auto;
    max-height: 5.8rem;
    padding-bottom: 0.3rem;
    .choose-title-wrap {
      padding-top: 0.2rem;
      span {
        font-size: 0.3rem;
      }
      .lens-choosed {
        color: gray;
      }
      .Specs-list {
        display: flex;
        display: -webkit-flex;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
        align-items: center;
        -webkit-align-items: center;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        margin-top: 0.2rem;
        .specs-detial-checked {
          background: #7f4395;
          color: #fff;
        }
        .specs-detial-checked {
          border: 1px solid #8141a3;
          border-radius: 0.06rem;
        }
        .specs-detial-normalSpecs {
          position: relative;
          height: 0.72rem;
          line-height: 0.72rem;
          padding: 0 0.4rem;
          margin-right: 5%;
          margin-bottom: 0.2rem;
          border: 1px solid #ccc;
          border-radius: 0.06rem;
          box-sizing: border-box;
        }
      }
    }
    .choose-num-wrap {
      position: relative;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      box-pack: justify;
      -webkit-box-pack: justify;
      align-items: center;
      -webkit-align-items: center;
      height: 1rem;
      line-height: 1rem;
      margin-top: 0.3rem;
      .choose-num-test {
        font-size: 0.3rem;
      }
      .contral-num {
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        -webkit-justify-content: space-around;
        align-items: center;
        -webkit-align-items: center;
        height: 0.54rem;
        border: 1px solid #dadada;
        border-radius: 0.05rem;
        .count-reduce,
        .count-add {
          position: relative;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #f4f4f4;
        }
        .count-reduce {
          border-top-left-radius: 0.03rem;
          border-bottom-left-radius: 0.03rem;
          .count-horizontal {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 0.02rem;
            background-color: #353535;
            transform: translate3d(-50%, -1px, 0);
            -webkit-transform: translate3d(-50%, -1px, 0);
          }
        }
        .count-reduce.count-disabled span {
          background-color: #dadada;
        }
        .buy-count {
          height: 0.54rem;
          line-height: 0.54rem;
          padding: 0 0.3rem;
          border-left: 1px solid #dadada;
          border-right: 1px solid #dadada;
          font-size: 0.3rem;
        }
        .count-add {
          border-top-right-radius: 0.03rem;
          border-bottom-right-radius: 0.03rem;
          .count-horizontal {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 0.02rem;
            background-color: #353535;
            transform: translate3d(-50%, -1px, 0);
            -webkit-transform: translate3d(-50%, -1px, 0);
          }
          .count-vertical {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.02rem;
            height: 50%;
            background-color: #353535;
            transform: translate3d(-1px, -50%, 0);
            -webkit-transform: translate3d(-1px, -50%, 0);
          }
        }
      }
    }
    .choose-num-wrap::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #ccc;
      transform: scaleY(0.5);
      -webkit-transform: scaleY(0.5);
    }
  }
}
.choose-size-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.96rem;
  line-height: 0.96rem;
  width: 100%;
  text-align: center;
  background-color: #fff;
  .choose-bottom-btn-wrap {
    position: relative;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -webkit-align-items: center;
    li {
      position: relative;
      flex-grow: 1;
      -webkit-flex-grow: 1;
      font-size: 0.3rem;
      width: 50%;
      height: 0.96rem;
    }
    .buy-shopcar-choose {
      position: relative;
      font-family: PingFang-SC-Medium;
      font-size: 0.3rem;
      color: gray;
      background-color: #fff;
    }
    .buy-shopcar-choose::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 1px;
      width: 100%;
      border-top: 1px solid #ccc;
      transform: scaleY(0.5);
      -webkit-transform: scaleY(0.5);
    }
    .buy-now,
    .buy-now-choose {
      color: #fff;
      background-color: #7e4395;
    }
    .no-store-btn {
      color: #fff;
      background: #ccc;
    }
    .give-red-bag {
      background: #8243a3;
      color: #fff;
    }
  }
  .none {
    display: none;
  }
  .buy-shopcar-choose-sure,
  .buy-now-choose-sure {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 0.96rem;
    line-height: 0.96rem;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
    background-color: #8443a4;
  }
}
</style>
