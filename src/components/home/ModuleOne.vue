

<template>
  <div>
    <div class="module-title">{{data.moduleInfo.moduleTitle}}</div>
    <swiper :options="swiperOption" class="ModuleOneUi">
      <swiper-slide v-for="(image, index) in data.moduleInfo.moduleItems" :key="index" class="ModuleOneLi">
        <a href="javascript:;">
          <img :src="image.image" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30
      },
      data: {
        templateId: 104,
        moduleType: "1",
        moduleInfo: {
          moduleItems: [
            {
              pcImageUrl:
                "https://bfs.biyao.com/group1/M00/31/C7/rBACW1q03TyAeZ0wAAC6r9ISU8M301.jpg",
              ext: {
                title: "销量排行"
              },
              webpImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03TeAetapAADy9SQZ6Ek360.webp",
              newImageUrl: "",
              webpNewImageUrl: "",
              image:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03TeAetapAADy9SQZ6Ek360.jpg",
              clickType: "6"
            },
            {
              pcImageUrl:
                "https://bfs.biyao.com/group1/M00/31/C4/rBACYVq03e-Afs7wAADAJFW8XS0670.jpg",
              ext: {
                supplierID: "130175",
                title: "Blilin 家居用品"
              },
              webpImageUrl:
                "https://bfs.biyao.com/group1/M00/31/C4/rBACYVq03eyAADH7AADlP2aePKg394.webp",
              newImageUrl: "",
              webpNewImageUrl: "",
              image:
                "https://bfs.biyao.com/group1/M00/31/C4/rBACYVq03eyAADH7AADlP2aePKg394.jpg",
              clickType: "3"
            },
            {
              pcImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03cqAI6fdAADpcATFUXc343.jpg",
              ext: {
                supplierID: "130195",
                title: "HKloss设计师品牌"
              },
              webpImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03cSAVSQhAAEtYL6jGFg187.webp",
              newImageUrl: "",
              webpNewImageUrl: "",
              image:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03cSAVSQhAAEtYL6jGFg187.jpg",
              clickType: "3"
            },
            {
              pcImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03gCAI0cVAADOxKSdiyg639.jpg",
              ext: {
                supplierID: "130057",
                title: "必柔家纺"
              },
              webpImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03f6AbXkOAAEP2jo_js4879.webp",
              newImageUrl: "",
              webpNewImageUrl: "",
              image:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03f6AbXkOAAEP2jo_js4879.jpg",
              clickType: "3"
            },
            {
              pcImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03iCAGa9bAACHBSWGFTM176.jpg",
              ext: {
                supplierID: "130129",
                title: "FTCA袜品"
              },
              webpImageUrl:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03h6AKCjiAACoTj2QPY0442.webp",
              newImageUrl: "",
              webpNewImageUrl: "",
              image:
                "https://bfs.biyao.com/group1/M00/30/13/rBACVFq03h6AKCjiAACoTj2QPY0442.jpg",
              clickType: "3"
            },
            {
              pcImageUrl:
                "https://bfs.biyao.com/group1/M00/31/C5/rBACYVq03hSAcQUrAAB6kLobu9Y952.jpg",
              ext: {
                supplierID: "130106",
                title: "EMP服饰"
              },
              webpImageUrl:
                "https://bfs.biyao.com/group1/M00/31/C8/rBACW1q03g2AV5XPAACQiHptJyg466.webp",
              newImageUrl: "",
              webpNewImageUrl: "",
              image:
                "https://bfs.biyao.com/group1/M00/31/C8/rBACW1q03g2AV5XPAACQiHptJyg466.jpg",
              clickType: "3"
            }
          ],
          moduleTitle: "精选"
        }
      }
    };
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
