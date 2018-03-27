<template>
    <div class="section-firstCate border-right-1px">
        <swiper :options="swiperOption" class="swiperOption">
            <swiper-slide v-for="(item,index) in sortMenu" class="content" :key="index">
                <a href="javascript:;"> {{item.categoryName}}</a>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
var dataJson = require("@/mockdata/home.json");
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        direction: "vertical",
        spaceBetween: 0,
        freeMode: true
      },
      sortMenu: []
    };
  },
  mounted() {
    this.addData();
  },
  methods: {
    addData() {
      for (let i = 0; i < dataJson.oneLevelCategoryList.length; i++) {
        this.sortMenu.push(dataJson.oneLevelCategoryList[i]);
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
.border-right-1px {
  border-right: 1px solid rgba(204, 204, 204, 0.527);
}
.section-firstCate {
  position: fixed;
  left: 0;
  top: 0.89rem;
  bottom: 0.99rem;
  z-index: 2;
  box-sizing: border-box;
  width: 1.81rem;
  overflow: hidden;
  .content {
    width: 1.76rem;
    height: 0.88rem;
    line-height: 0.88rem;
    border-left: 0.04rem solid transparent;
    font-size: 0.3rem;
    color: #333;
    text-align: center;
  }
  .escp {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
