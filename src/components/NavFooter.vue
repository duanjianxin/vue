<template>
  <!-- Footer -->
  <van-tabbar v-model="active" class="footer">
    <van-tabbar-item icon="shop" to="/">
      <span>首页</span>
      <template slot="icon" slot-scope="props">
        <i class="iconfont icon-store"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="chat" to="/classify">
      <span>分类</span>
      <template slot="icon" slot-scope="props">
        <i class="iconfont icon-viewgallery"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="records" to="/cart">
      <span>购物车</span>
      <template slot="icon" slot-scope="props">
        <i class="iconfont icon-cart"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="gold-coin" to="/account">
      <span>我的</span>
      <template slot="icon" slot-scope="props">
        <i class="iconfont icon-account"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style>
.footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  z-index: 999;
}
.van-tabbar-item--active {
  color: #7f4395;
}
</style>
