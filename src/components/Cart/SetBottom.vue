<template>
    <div class="set-bottom border-t-1 clear" id="set-bottom">
        <div class="float-right">
            <span>合计：</span>
            <span class="total-price" id="total-price">￥
                <i>0</i>
            </span>
            <div class="settlement" id="settlement">去结算</div>
        </div>
        <div class="float-left">
            <div id="checkAll">
                <span class="nocheck">
                    <van-checkbox class="van_checkbox"></van-checkbox>
                </span>
                <!-- <span class="checked none">
                    <svg class="icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-icon_right_sel"></use>
                    </svg>
                </span> -->
                <i>全选</i>
            </div>
        </div>
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup } from "vant";
export default {
  data() {
    return {
      msg: "SetBottom"
    };
  },
  methods: {},
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
