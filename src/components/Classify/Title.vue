<template>
  <div class="main-title">
    <div class="title-site"></div>
    <div class="title-fix fix-active">
      <router-link :to="{path:'/'}">
        <i class="iconfont icon-store"></i>
      </router-link>
      <p class="escp">{{title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["childTitle"],
  data() {
    return {
      title: this.$props.childTitle
    };
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.main-title {
  position: relative;
  .title-site {
    height: 0.85rem;
  }
  .title-fix {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 7.5rem;
    height: 0.84rem;
    overflow: hidden;
    background: #fff;
    border-bottom: 0.01rem solid #ccc;
    box-shadow: 0.01rem 0.01rem 0.05rem rgba(7, 0, 2, 0.2);
    -webkit-box-shadow: 0.01rem 0.01rem 0.05rem rgba(7, 0, 2, 0.2);
    -moz-box-shadow: 0.01rem 0.01rem 0.05rem rgba(7, 0, 2, 0.2);
  }
  .fix-active {
    position: fixed;
    top: 0;
    left: 0;
    a {
      position: absolute;
      top: 0.13rem;
      left: 0.2rem;
      z-index: 2;
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      font-size: 0.45rem;
      i {
        font-size: 0.4rem;
      }
    }
    p {
      line-height: 0.84rem;
      width: 4.8rem;
      margin: 0 auto;
      font-size: 0.32rem;
      text-align: center;
      color: #333;
    }
    .escp {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
