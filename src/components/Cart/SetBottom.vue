<template>
  <div class="set-bottom border-t-1 clear" id="set-bottom">
    <div class="float-right">
      <span>合计：</span>
      <span class="total-price" id="total-price">￥
        <i>{{$store.state.cart.totalPrice}}</i>
      </span>
      <div class="settlement" id="settlement">去结算</div>
    </div>
    <div class="float-left">
      <div id="checkAll">
        <span class="nocheck">
          <i class="iconfont van_checkbox " :class="[$store.state.cart.CheckAll ? 'icon-checked':'icon-unchecked']" @click="CheckAllActions"></i>
        </span>
        <i>全选</i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "SetBottom"
    };
  },
  methods: {
    ...mapActions(["CheckAllActions"])
  },
  mounted() {}
};
</script>

<style lang="scss" scoped="" type="text/css">
.van_checkbox {
  display: inline-grid;
}
.clear::after {
  content: "";
  clear: both;
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
.border-t-1 {
  border-top: 1px solid #ccc;
}
.van_checkbox {
  color: #7f4395;
}
.set-bottom {
  position: fixed;
  left: 0;
  bottom: 0.98rem;
  height: 0.99rem;
  width: 95%;
  padding: 0 0.2rem;
  background-color: #fff;
  .float-right {
    line-height: 0.98rem;
    font-size: 0.3rem;
    color: #333;
    float: right;
    .total-price {
      line-height: 0.98rem;
      font-size: 0.3rem;
      color: #f33;
      margin-right: 0.2rem;
    }
    .settlement {
      display: inline-block;
      vertical-align: middle;
      height: 0.65rem;
      border-radius: 0.08rem;
      color: #fff;
      line-height: 0.65rem;
      padding: 0 0.36rem;
      background-color: #f33;
      box-shadow: 0 5px 16px -3px #f33;
      -webkit-box-shadow: 0 5px 16px -3px #f33;
    }
  }
  .float-left {
    line-height: 0.98rem;
    font-size: 0.3rem;
    color: #333;
    float: left;

    .nocheck,
    .checked {
      font-size: 0.32rem;
      line-height: 1;
      padding: 0.3rem 0;
    }
    i {
      margin-left: 0.2rem;
    }
  }
}
</style>
