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
import http from "@/util/http";
import api from "@/util/api";
export default {
  data() {
    return {
      // banners: []
    };
  },
  computed: {
    ...mapGetters(["banners"]) //方法1  vuex请求 banners数据
  },
  mounted() {
    // this.fetchData()//方法2   组件内请求banners数据
  },
  methods: {
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.homeBanners, params);
      if (res.data.status == 0) {
        // this.banners = res.data.result.data;
        console.log(res.data.result.data);
      }
    }
  },
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
