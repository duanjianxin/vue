<template>
  <router-link to="/search" class="header-search">
    <i class="iconfont icon-search"></i>
    <span>请输入您想要的商品</span>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      msg: "Search"
    };
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.header-search {
  width: 7.1rem;
  height: 0.6rem;
  margin: 0.14rem auto 0;
  border-radius: 0.06rem;
  background-color: #f2f2f2;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  i {
    display: inline-block;
    width: 0.55rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.3rem;
    color: gray;
  }
  span {
    font-size: 0.3rem;
    color: gray;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
  }
}
</style>
