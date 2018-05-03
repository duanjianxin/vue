<template>
  <div class="main-section">
    <ul class="section-cateList">
      <li v-for="(item,index) in data" :key="index">
        <p v-if="titleShow">{{item.categoryName}}</p>
        <ul class="section-proList clear">
          <li v-for="(proList,proListindex) in item.item" :key="proListindex">
            <router-link :to="{path:'/products',query: {
            suId: proList.suId }}">
              <img :src="proList.imageUrl" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
              <dl>
                <dt class="escp">{{proList.title}}</dt>
                <dd>￥{{proList.price}}</dd>
              </dl>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <ReturnTop></ReturnTop>
  </div>
</template>
<script>
import ReturnTop from "@/components/ReturnTop";
import http from "@/assets/util/http";
import api from "@/assets/util/api";
export default {
  props: ["titleShow"],
  data() {
    return {
      msg: "CateList",
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.productList, params);
      if (res.data.status == 0) {
        this.data = res.data.result.data[0].productList;
        // console.log(res.data.result.data[0].productList);
      }
    }
  }, //   组件
  components: {
    ReturnTop
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.clear::after {
  content: "";
  clear: both;
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
.main-section {
  padding-bottom: 1rem;
  background-color: #f2f2f2;
  .section-cateList {
    li {
      padding: 0 0.02rem;
      p {
        height: 0.87rem;
        line-height: 0.87rem;
        color: gray;
        font-size: 0.3rem;
        text-align: center;
        padding: 0 0.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      ul.section-proList {
        li {
          float: left;
          margin: 0 0.02rem 0.08rem;
          background: #fff;
          a {
            position: relative;
            display: block;
            width: 3.65rem;
            height: 4.2rem;
            text-align: center;
            img {
              width: 3.1rem;
              height: 3.1rem;
              background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
                no-repeat center;
            }
          }
          dl {
            padding: 0.1rem;
            text-align: center;
            dt {
              height: 0.48rem;
              line-height: 0.48rem;
              font-size: 0.3rem;
              color: #333;
            }
            .escp {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            dd {
              height: 0.42rem;
              line-height: 0.42rem;
              font-size: 0.3rem;
              color: #f33;
            }
          }
        }
      }
    }
  }
}
</style>
