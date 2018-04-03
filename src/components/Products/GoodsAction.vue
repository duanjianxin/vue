<template>
  <van-goods-action>
    <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
    <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
    <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" class="buy-shopcar" />
    <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary class="buy-now" />
  </van-goods-action>
</template>
<script>
import { Toast } from "vant";
export default {
  methods: {
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
  background-color: #e7b32b;
}
.buy-now,
.buy-now-choose {
  color: #fff;
  background-color: #7e4395;
}
</style>
