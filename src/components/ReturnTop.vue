<template>
  <div class="returnTop border-1" style="opacity: 1;" @click="toTop" v-if="returnTop">
    <i class="icon-back-top iconfont icon-less" aria-hidden="true"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "ReturnTop",
      returnTop: false,
      scroll: ""
    };
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll >= "350") {
        this.returnTop = true;
      } else {
        this.returnTop = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.returnTop {
  position: fixed;
  right: 0.2rem;
  bottom: 1.28rem;
  z-index: 98;
  text-align: center;
  cursor: pointer;
  width: 0.8rem;
  height: 0.8rem;
  font-size: 0.8rem;
  line-height: 0.8rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #fff;
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  -ms-transition-duration: 0.5s;
  transition-duration: 0.5s;
  opacity: 0;
  overflow: hidden;
  .icon-back-top {
    font-size: 0.7rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
    position: relative;
    top: -0.02rem;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
