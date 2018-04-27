<template>
  <div>
    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <div v-for="(item,index) in list" :key="index" class="module-three">
        <router-link :to="{path:'/classify/categoryList'}" class="hidden">
          <div class="module-title">
            {{item.moduleInfo.moduleTitle}}
            <span>
              <svg class="icon module-title-icon" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-right"></use>
              </svg>
            </span>
          </div>
        </router-link>
        <div class="product-brand clear">
          <router-link :to="{path:'/classify/categoryList'}" class="hidden">
            <img v-lazy="item.moduleInfo.moduleImage" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
            <p>
              <span>{{item.moduleInfo.manufacturers}}<br>{{item.moduleInfo.moduleBrand}}</span>
            </p>
          </router-link>
        </div>
        <hr>

        <ul class="product-list clear">
          <li v-for="(moduleItem,index) in item.moduleInfo.moduleItems" :key="index">
            <router-link :to="{path:'/products',query: {
            suId: moduleItem.ext.suId }}">
              <img v-lazy="moduleItem.image" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
              <dl>
                <dt class="escp">{{moduleItem.ext.itemName}}</dt>
                <dd>¥{{moduleItem.ext.itemPrice}}</dd>
              </dl>
            </router-link>
          </li>
        </ul>
      </div>
    </van-list>
  </div>
</template>
<script>
import http from "@/util/http";
import api from "@/util/api";
export default {
  data() {
    return {
      msg: "ModuleThree",
      list: [],
      loading: false,
      finished: false,
      dataJson: []
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {},
  methods: {
    fetchData: async function() {
      let params = {
        type: "3"
      };
      const res = await http.get(api.homeModules, params);
      if (res.data.status == 0) {
        this.dataJson = res.data.result.data;
      }
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < this.dataJson.length; i++) {
          this.list.push(this.dataJson[i].modules);
        }
        this.loading = false;
        if (this.list.length % 10 > 0) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.module-three {
  margin-top: 0.2rem;
  background: #fff;
}
a.hidden {
  display: none;
  .module-title {
    height: 1rem;
    line-height: 1.12rem;
    font-size: 0.32rem;
    color: #333;
    overflow: hidden;
    text-align: center;
  }
  span {
    font-size: 0.48rem;
    .module-title-icon {
      vertical-align: middle;
    }
  }
}
.clear {
  clear: left;
}
.product-brand {
  position: relative;
  margin: 0.12rem 0;
  a {
    display: block;
    position: relative;
    width: 100%;
    img {
      width: 7.5rem;
      height: 2.6rem;
      background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
        no-repeat center;
    }
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.84rem;
    height: 1.12rem;
    margin: -0.63rem 0 0 -1.98rem;
    border: 0.07rem solid rgba(255, 255, 255, 0.8);
    span {
      display: block;
      width: 3.78rem;
      height: 0.76rem;
      margin: 0.03rem;
      padding: 0.15rem 0;
      font-size: 0.28rem;
      text-align: center;
      color: #333;
      background: rgba(255, 255, 255, 0.8);
    }
  }
}

.module-three ul {
  padding-bottom: 0.12rem;
  li {
    float: left;
    width: 2.23rem;
    margin-left: 0.2rem;
    a {
      display: block;
      img {
        width: 2.23rem;
        height: 2.23rem;
        background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
          no-repeat center;
      }
      dl {
        padding: 0.08rem 0 0.34rem;
        dt {
          width: 2.4rem;
          margin: 0 auto;
          line-height: 0.5rem;
          font-size: 0.26rem;
          color: #333;
        }
        .escp {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        dd {
          line-height: 0.4rem;
          font-size: 0.28rem;
          color: #f33;
        }
      }
    }
  }
}
</style>
