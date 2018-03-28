<template>
  <div>
    <div class="section-firstCate border-right-1px">
      <ul>
        <li v-for="(item,index) in sortMenu" class="content" :key="index" :class="{'firstCate-active':item.categoryId==categoryId}">
          <router-link :to="{path:'/classify/classify',query: {
            categoryId: item.categoryId}}" :class="{'firstCate-activea':item.categoryId==categoryId}">{{item.categoryName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="section-cateList">
      <ul>
        <li class="cateList-first">
          <a href="javascript:;" class="top-banner">
            <img :src="cateLists.categoryImage.imageUrl" v-if="cateLists.categoryImage" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
          </a>
          <ul>
            <li class="cateList-second" v-for="(item,index) in cateLists.subCategoryList" :key="index">
              <div class="list-hd">{{item.categoryName}}</div>
              <ul class="clear">
                <li class="cateList-third" v-for="(third,index) in item.subCategoryList" :key="index">
                  <a href="javascript:;">
                    <dl>
                      <dt>
                        <img :src="third.imageUrl" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
                      </dt>
                      <dd>{{third.categoryName}}</dd>
                    </dl>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
var dataJson = require("@/mockdata/category.json");
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        direction: "vertical",
        spaceBetween: 0,
        freeMode: true
      },
      sortMenu: [],
      cateLists: {},
      categoryId: 279
    };
  },
  mounted() {
    this.addData();
    this.cateListData();
    console.log(dataJson);
  },
  methods: {
    addData() {
      for (let i = 0; i < dataJson.length; i++) {
        this.sortMenu.push({
          categoryName: dataJson[i].categoryName,
          categoryId: dataJson[i].categoryId
        });
      }
    },
    cateListData() {
      for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i].categoryId == this.categoryId) {
          this.cateLists = {
            categoryImage: dataJson[i].categoryImage,
            categoryName: dataJson[i].categoryName,
            categoryId: dataJson[i].categoryId,
            subCategoryList: dataJson[i].subCategoryList,
            categoryType: dataJson[i].categoryType
          };
        }
      }
    },
    getParams() {
      // 取到路由带过来的参数
      let routerParams = this.$route.query.categoryId;
      // 将数据放在当前组件的数据内
      this.categoryId = routerParams;
      this.cateListData();
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.clear::after {
  content: "";
  clear: both;
  display: block;
  width: 0;
}
.border-right-1px {
  border-right: 1px solid rgba(204, 204, 204, 0.527);
}
.section-firstCate::-webkit-scrollbar {
  display: none;
}
.section-firstCate {
  position: fixed;
  left: 0;
  top: 0.89rem;
  bottom: 0.99rem;
  z-index: 2;
  box-sizing: border-box;
  width: 1.81rem;
  overflow-y: auto;

  .escp {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ul {
    width: 1.8rem;
    li {
      width: 1.76rem;
      height: 0.88rem;
      line-height: 0.88rem;
      border-left: 0.04rem solid transparent;
      font-size: 0.3rem;
      color: #333;
      text-align: center;
    }
    .firstCate-active {
      border-left: 0.04rem solid #7f4395;
      .firstCate-activea {
        color: #7f4395;
      }
    }
  }
}
.section-cateList::-webkit-scrollbar {
  display: none;
}
.section-cateList {
  position: fixed;
  left: 0;
  top: 0.89rem;
  z-index: 2;
  box-sizing: border-box;
  width: 5.69rem;
  bottom: 0.99rem;
  left: 1.81rem;
  overflow-y: auto;
  ul {
    .cateList-first {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #fff;
      a {
        display: block;
        img {
          width: 5.29rem;
          height: 2.4rem;
          margin: 0.2rem 0.2rem 0;
          background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
            no-repeat center;
        }
      }
      ul {
        // margin-top: 0.4rem;
        // padding: 0 0.5rem;
        .cateList-second {
          .list-hd {
            height: 0.8rem;
            position: relative;
            line-height: 0.8rem;
            text-align: center;
            font-size: 0.24rem;
            color: #333;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .list-hd:before {
            content: "";
            position: absolute;
            height: 0.026667rem;
            top: 50%;
            margin-top: -0.0133335rem;
            margin-left: -0.906667rem;
            width: 0.64rem;
            background: #ccc;
          }
          .list-hd:after {
            content: "";
            position: absolute;
            height: 0.026667rem;
            top: 50%;
            margin-top: -0.0133335rem;
            margin-left: 0.266667rem;
            width: 0.64rem;
            background: #ccc;
          }
          .cateList-third {
            float: left;
            width: 33.333%;
            margin-top: 0.4rem;
            a {
              display: block;
            }
            dl {
              text-align: center;
              dt {
                img {
                  width: 1.28rem;
                  height: 1.28rem;
                  border-radius: 0.03rem;
                  background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
                    no-repeat center;
                }
              }
              dd {
                margin-top: 0.2rem;
                color: #333;
                font-size: 0.24rem;
                word-break: break-all;
              }
            }
          }
        }
      }
    }
  }
}
</style>
