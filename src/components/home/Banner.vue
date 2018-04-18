<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index" class="img-warp">
        <router-link :to="{path:'/classify/supplierHome'}">
          <img v-lazy="image.image" class="img-box" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// var dataJson = require("@/mockdata/home.json");

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      // banners: []
    };
  },
  computed: {
    ...mapGetters(["banners"])
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped="" type="text/css">
.img-warp {
  height: 2.6rem;
  overflow: hidden;
  .img-box {
    display: block;
    height: 100%;
  }
}
.van-swipe__indicators {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  z-index: 2;
}
</style>
