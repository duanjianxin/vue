<template>
  <van-goods-action>
    <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
    <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
    <van-goods-action-big-btn text="加入购物车" @click="buyShopcarSureBtnActions" class="buy-shopcar" />
    <van-goods-action-big-btn text="立即购买" @click="buyNowSureBtnActions" primary class="buy-now" />
  </van-goods-action>
</template>
<script>
import { Toast } from "vant";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["buyShopcarSureBtnActions", "buyNowSureBtnActions"]),
    onClickMiniBtn() {
      Toast("点击图标");
    },
    onClickBigBtn() {
      Toast("点击按钮");
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.buy-shopcar {
  font-family: PingFang-SC-Medium;
  color: #fff;
  background-color: #e7b32b !important;
}
.buy-now,
.buy-now-choose {
  color: #fff;
  background-color: #7e4395 !important;
}
</style>
