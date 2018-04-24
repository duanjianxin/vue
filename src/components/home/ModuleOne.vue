<template>
  <div v-if="datas">
    <div class="module-title">{{ datas.moduleTitle }}</div>
    <swiper :options="swiperOption" class="ModuleOneUi">
      <swiper-slide v-for="item in datas.moduleItems" :key="item.ext.supplierID" class="ModuleOneLi">
        <a href="javascript:;">
          <img :src="item.image" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import http from "@/util/http";
import api from "@/util/api";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30
      },
      datas: ""
    };
  },
  mounted() {
    this.fetchData(); //方法2   组件内请求banners数据
  },
  computed: {
    // ...mapGetters(["moduleItemsModuleOne"])
  },
  methods: {
    fetchData: async function() {
      let params = {
        type: "1"
      };
      const res = await http.get(api.homeModules, params);
      if (res.data.status == 0) {
        this.datas = res.data.result.data[0].modules.moduleInfo;
        // console.log(res.data.result.data[0].modules);
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.module-title {
  height: 1rem;
  line-height: 1.12rem;
  font-size: 0.32rem;
  color: #333;
  overflow: hidden;
  text-align: center;
}
.ModuleOneUi {
  //   width: 80rem;
  height: 3.63rem;
  padding: 0.12rem 0 0.2rem;
  overflow: hidden;
  .ModuleOneLi {
    float: left;
    padding-left: 0.2rem;
    a {
      display: inline-block;
    }
    img {
      width: 6.65rem;
      height: 3.63rem;
      background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
        no-repeat center;
    }
  }
}
</style>
