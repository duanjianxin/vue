<template>
  <div class="guarantee_g">
    <ul>
      <li v-for="(item, index) in platformAssurance" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      // data: ["大牌制造商出品", "七天无忧退换", "全平台包邮"]
    };
  },
  computed: {
    ...mapGetters(["platformAssurance"])
    // ...mapState({
    //   homeData: state => state.home.homeData
    // })
  },
  methods: {},
  mounted() {},
  watch: {
    // platformAssurance: function(val) {
    //   console.log(val);
    // }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.guarantee_g {
  height: 0.723rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 0 0.2rem;
  ul {
    display: flex;
    li {
      float: left;
      display: block;
      line-height: 0.72rem;
      color: #7f4395;
      font-size: 0.24rem;
      font-family: PingFangSC;
      background: url(https://static.biyao.com/m/img/master/index/checked.png?=biyao7e6fbbe)
        no-repeat left center;
      background-size: 0.24rem 0.24rem;
      text-align: left;
      padding-left: 0.44rem;
      -webkit-flex: 1;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
