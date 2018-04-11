<template>
  <div class="shopcar-empty" id="shopcar-empty">
    <img src="https://static.biyao.com/m/img/null/shopcar.png?=biyao6b91960" width="50px">
    <div class="empty-til">购物车还是空的，赶紧行动吧！</div>
    <router-link :to="{path:'/'}">去逛逛</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "empty"
    };
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.shopcar-empty {
  position: absolute;
  left: 50%;
  top: 1.6rem;
  width: 5.6rem;
  margin-left: -2.8rem;
  text-align: center;
  img {
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
  .empty-til {
    font-size: 0.3rem;
    color: #666;
    line-height: 1.1rem;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #fff;
    text-align: center;
    font-size: 0.24rem;
    background-color: #b768a5;
    -webkit-border-radius: 0.06rem;
    border-radius: 0.06rem;
  }
}
</style>
