<template>
  <div class="container">
    <div v-for="(item,index) in datajson.productList" :key="index">
      <div class="show-product-head">
        <div class="product-show-title">{{item.saleTime}}</div>
      </div>
      <div class="new-product-list">
        <router-link :to="{path:'/products',query: {
            productId: item2.productId }}" v-for="(item2,index2) in item.item" :key="index2">
          <div class="new-product-item first">
            <div class="product-pic">
              <img class="lazy" :src="item2.imageUrl" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
            </div>
            <div class="product-name">{{item2.title}}</div>
            <div class="product-dec">{{item2.salePoint}}</div>
            <div class="product-price">￥
              <span>{{item2.price}}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/assets/util/http";
import api from "@/assets/util/api";
export default {
  data() {
    return {
      datajson: ""
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      let params = {};
      const res = await http.get(api.newproduct, params);
      if (res.data.status == 0) {
        this.datajson = res.data.result.data;
      }
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.container {
  width: 100%;
  min-height: 100%;
  background-color: #f2f2f2;
}
.show-product-head {
  text-align: center;
  height: 0.8rem;
  .product-show-title {
    position: relative;
    display: inline-block;
    line-height: 0.8rem;
    color: gray;
    font-size: 0.24rem;
  }
  .product-show-title::before {
    left: -1.1rem;
  }
  .product-show-title::after {
    right: -1.1rem;
  }
  .product-show-title::before,
  .product-show-title::after {
    content: "";
    position: absolute;
    top: 0.4rem;
    width: 0.9rem;
    height: 0.02rem;
    background-color: gray;
  }
}
.new-product-list {
  a {
    .new-product-item.first {
      margin-top: 0;
    }
    .new-product-item {
      position: relative;
      padding-bottom: 0.2rem;
      margin-top: 0.2rem;
      background-color: #fff;
      .product-pic {
        width: 100%;
        height: 3.84rem;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .product-name {
        padding-left: 0.2rem;
        line-height: 0.73rem;
        font-size: 0.36rem;
        color: #333;
        width: 6.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .product-dec {
        padding-left: 0.2rem;
        line-height: 1;
        font-size: 0.24rem;
        color: gray;
        width: 6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .product-price {
        position: absolute;
        right: 0.2rem;
        bottom: 0.2rem;
        font-size: 0.36rem;
        line-height: 1;
        color: #f33;
      }
    }
  }
}
</style>
