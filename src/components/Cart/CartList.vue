<template>
  <div id="panel-set" class="">
    <div class="shop-panel" v-for="(shopPanel,key,index) in $store.state.cart.ShopcarData.dic" :key="key">
      <div class="shop-panel-store border-b-1 clear">
        <div class="float-right">
          <span class="store-edit" data-edit="1" @click="storeEditActions({key:key,index:index})" v-if="$store.state.cart.storeList[index]">{{$store.state.cart.storeList[index].ifstoreEdit?'完成':'编辑'}}</span>
        </div>
        <div class="float-left">
          <b class="store-check">
            <span class="nocheck" v-if="$store.state.cart.storeList[index]">
              <i class="iconfont van_checkbox" :class="[$store.state.cart.storeList[index].storeCheck ? 'icon-checked':'icon-unchecked']" @click="storeCheckChangeActions({key:key,index:index})"></i>
            </span>
          </b>
          <img src="https://static.biyao.com/m/img/master/shopCar/store-logo.png" class="store-logo">
          <a class="store-name" href="javascript:;">{{shopPanel[0].supplierName}}</a>
          <span class="icon-arrow-right">
            <i class="iconfont icon-more"></i>
          </span>
        </div>
      </div>
      <div class="shop-panel-product-set">
        <div class="shop-panel-product-item border-b-1 clear" v-for="(shopPanelProductSet,index2) in shopPanel" :key="shopPanelProductSet.shopCar.createTime">
          <div class="float-left icon-radio">
            <b class="su-check">
              <span class="nocheck" v-if="$store.state.cart.storeList[index]">
                <i class="iconfont van_checkbox " :class="[$store.state.cart.storeList[index].storeCheckData[index2].isSelected ? 'icon-checked':'icon-unchecked']" @click="suCheckChangeActions({key:key,index:index,index2:index2})"></i>
              </span>
            </b>
          </div>
          <div class="product-pic border-1">
            <a href="javascript:;">
              <img class="lazy" :src="shopPanelProductSet.img_url_288" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'"></a>
          </div>
          <div class="product-detail">
            <div class="product-name " v-if="$store.state.cart.storeList[index]" v-show="!$store.state.cart.storeList[index].data[index2]">
              <a href="javascript:;">{{shopPanelProductSet.designName}} </a>
            </div>
            <div class="product-info " v-if="$store.state.cart.storeList[index]" v-show="!$store.state.cart.storeList[index].data[index2]">
              <div class="product-dec">{{shopPanelProductSet.shopCar.sizeName}}</div>
              <div class="product-buy">
                <span class="product-price">￥
                  <i>{{shopPanelProductSet.price}}</i>
                </span>×
                <span class="product-num">{{shopPanelProductSet.shopCar.num}}</span>
              </div>
            </div>
            <div class="product-edit clear " v-if="$store.state.cart.storeList[index]" v-show="$store.state.cart.storeList[index].data[index2]" data-shopcarid="805345460" data-suid="1300865211060100001">
              <span class="del-btn float-right">
                <i class="iconfont icon-delete"></i>
              </span>
              <div class="maparea">
                <span class="reduce-btn font-disable">-</span>
                <span class="su-num">1</span>
                <span class="add-btn ">+</span>
              </div>
            </div>
          </div>
          <div class="product-else "></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "CartList"
      // data: this.$store.state.cart.ShopcarData
    };
  },
  methods: {
    ...mapActions([
      "storeListDataActions",
      "storeEditActions",
      "storeCheckChangeActions",
      "suCheckChangeActions"
    ])
  },
  mounted() {
    this.storeListDataActions();
    // console.log(this.$store.state.cart.ShopcarData);
  },
  watch: {}
};
</script>

<style lang="scss" scoped="" type="text/css">
.clear::after {
  content: "";
  clear: both;
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
a {
  text-decoration: none;
  color: #333;
}
img {
  max-width: 100%;
}
.border-b-1 {
  border-bottom: 1px solid #ccc;
}
.none {
  display: none;
}
.float-left {
  float: left;
}
.van_checkbox {
  color: #7f4395;
}
.shop-panel {
  margin-bottom: 0.2rem;
  background-color: #fff;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  .shop-panel-store {
    padding: 0.27rem 0;
    .float-right {
      float: right;
      .store-edit {
        font-size: 0.3rem;
        line-height: 0.35rem;
        color: #333;
      }
    }
    .float-left {
      float: left;
      .store-check {
        position: relative;
        top: -0.03rem;
        .nocheck,
        .checked {
          font-size: 0.32rem;
          line-height: 1;
          padding: 0.3rem 0;
        }
        .none {
          display: none;
        }
      }
      .store-logo {
        vertical-align: bottom;
        margin-left: 0.2rem;
        display: inline-block;
        width: 0.32rem;
        height: 0.32rem;
        position: relative;
        top: -0.04rem;
      }
      .store-name {
        display: inline-block;
        font-size: 0.3rem;
        color: #7f4395;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        max-width: 4.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        position: relative;
        top: -0.02rem;
      }
      .icon-arrow-right {
        font-size: 0.26rem;
        line-height: 0.32rem;
        position: relative;
        top: -0.04rem;
      }
    }
  }
  .shop-panel-product-set {
    .shop-panel-product-item:last-child {
      border-bottom: 0;
    }

    .shop-panel-product-item {
      position: relative;
      padding: 0.24rem 0;
      .icon-radio {
        margin-top: 0.56rem;
        .su-check {
          position: relative;
          top: -0.03rem;
        }
      }
      .product-pic {
        float: left;
        width: 1.44rem;
        height: 1.44rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        font-size: 0;
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
        overflow: hidden;
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
          display: inline-block;
          vertical-align: bottom;
        }
      }
      .product-detail {
        float: left;
        width: 4.8rem;
        overflow: hidden;
        .product-name {
          width: 100%;
          font-size: 0.3rem;
          line-height: 1.2;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .product-info {
          .product-dec {
            width: 100%;
            font-size: 0.3rem;
            line-height: 1;
            color: gray;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0.2rem 0;
          }
          .product-buy {
            font-size: 0.3rem;
            line-height: 1;
            .product-price {
              color: #f33;
              margin-right: 0.32rem;
            }
          }
        }
        .product-edit {
          margin-top: 0.3rem;
          padding-left: 0.4rem;
          font-size: 0.3rem;
          line-height: 1;
          .del-btn {
            position: absolute;
            right: -0.2rem;
            top: 0;
            width: 1rem;
            height: 1.93rem;
            background-color: #f33;
            font-size: 0.32rem;
            color: #fff;
            line-height: 1.93rem;
            text-align: center;
          }
          .maparea {
            position: relative;
            width: 2.84rem;
            height: 0.64rem;
            border: 0.02rem solid #ccc;
            .reduce-btn {
              position: relative;
              display: inline-block;
              width: 0.6rem;
              height: 0.6rem;
              color: #333;
              line-height: 0.6rem;
              text-align: center;
            }
            .font-disable {
              color: #ccc !important;
            }
            .su-num {
              display: inline-block;
              height: 0.6rem;
              width: 1.6rem;
              color: #333;
              text-align: center;
              line-height: 0.6rem;
              border-left: 0.02rem solid #ccc;
              border-right: 0.02rem solid #ccc;
            }
            .add-btn {
              position: relative;
              width: 0.6rem;
              height: 0.6rem;
              // padding-left: 0.22rem;
            }
          }
        }
        .product-else {
          position: absolute;
          right: 0;
          bottom: 0.24rem;
        }
      }
    }
  }
}
</style>
