<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img :src="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      banners: [
        {
          pcImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyJ5KARFMjAAD-dpCF8_k537.jpg",
          ext: {
            supplierID: "130022",
            title: "必然眼镜"
          },
          webpImageUrl:
            "https://bfs.biyao.com/group1/M00/2F/19/rBACYVqZN7mATKUtAADqpVbezGk108.webp",
          newImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyJ46AU75LAACRgzH7z_4580.jpg",
          webpNewImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyJ46AU75LAACRgzH7z_4580.webp",
          image:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyJ46AU75LAACRgzH7z_4580.jpg",
          clickType: "3"
        },
        {
          pcImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyJ-6AJziEAAFY0nGSkkk704.jpg",
          ext: {
            supplierID: "130140",
            title: "Origin Oasis 护肤品"
          },
          webpImageUrl:
            "https://bfs.biyao.com/group1/M00/2E/D2/rBACW1qWhcaAHNFkAAE5HKHL31Q785.webp",
          newImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyJ-mARje_AAC8I9cwhPw182.jpg",
          webpNewImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyJ-mARje_AAC8I9cwhPw182.webp",
          image:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyJ-mARje_AAC8I9cwhPw182.jpg",
          clickType: "3"
        },
        {
          pcImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyKBKAd8KuAADa9q7hNZo125.jpg",
          ext: {
            supplierID: "130086",
            title: "苏薇之恋女士内衣"
          },
          webpImageUrl:
            "https://bfs.biyao.com/group1/M00/2E/D1/rBACYVqWhmKAW4mxAADhoTuzXUQ316.webp",
          newImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyKA6AEo5BAACa7mXVQrA787.jpg",
          webpNewImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyKA6AEo5BAACa7mXVQrA787.webp",
          image:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyKA6AEo5BAACa7mXVQrA787.jpg",
          clickType: "3"
        },
        {
          pcImageUrl:
            "https://bfs.biyao.com/group1/M00/31/57/rBACYVqyKF-AKVnFAAECxsZof2A352.jpg",
          ext: {
            supplierID: "130198",
            title: "偶亿数码OWNNI"
          },
          webpImageUrl:
            "https://bfs.biyao.com/group1/M00/2C/2A/rBACVFqAG3SAYZPwAAF2zKJbE7w797.webp",
          newImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKFuANN-cAACxepGOm2o487.jpg",
          webpNewImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKFuANN-cAACxepGOm2o487.webp",
          image:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKFuANN-cAACxepGOm2o487.jpg",
          clickType: "3"
        },
        {
          pcImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKMSAPYoyAAEhGAmJZKw969.jpg",
          ext: {
            supplierID: "130104",
            title: "MC服装"
          },
          webpImageUrl:
            "https://bfs.biyao.com/group1/M00/2E/D3/rBACW1qWhuGAN80kAADBgENjHjQ533.webp",
          newImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKMCAcWChAACgk5dZYtA631.jpg",
          webpNewImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKMCAcWChAACgk5dZYtA631.webp",
          image:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKMCAcWChAACgk5dZYtA631.jpg",
          clickType: "3"
        },
        {
          pcImageUrl:
            "https://bfs.biyao.com/group1/M00/31/5A/rBACW1qyKKGAa9s0AADyVdTn11w461.jpg",
          ext: {
            supplierID: "130193",
            title: "MOSION——摩尚服饰"
          },
          webpImageUrl:
            "https://bfs.biyao.com/group1/M00/28/50/rBACVFpfIRKAEzNvAADJsa7Pxiw165.webp",
          newImageUrl:
            "https://bfs.biyao.com/group1/M00/2F/A6/rBACVFqyKJ2ABI4MAACVze_rXkY726.jpg",
          webpNewImageUrl:
            "https://bfs.biyao.com/group1/M00/2F/A6/rBACVFqyKJ2ABI4MAACVze_rXkY726.webp",
          image:
            "https://bfs.biyao.com/group1/M00/2F/A6/rBACVFqyKJ2ABI4MAACVze_rXkY726.jpg",
          clickType: "3"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped="" type="text/css">
// .banner {
//   position: relative;
//   .banner-box {
//     height: 2.6rem;
//     a {
//       display: block;
//       height: 100%;
//       img {
//         width: 7.5rem;
//         height: 100%;
//       }
//     }
//   }
// }
</style>
