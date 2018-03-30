<template>
  <ul class="clear">
    <li>
      <router-link :to="{path:'/classify/newproductList'}">
        <img src="https://bfs.biyao.com/group1/M00/30/12/rBACVFq02lCANJc-AAB39nA80OQ958.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/classify/newproductList'}">
        <img src="https://bfs.biyao.com/group1/M00/30/12/rBACVFq02maAGEcOAAA3_AiZdDg625.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/classify/newproductList'}">
        <img src="https://bfs.biyao.com/group1/M00/31/C4/rBACYVq02o2AAFxzAAAu95T5fPA018.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
      </router-link>
    </li>
  </ul>
</template>
<script>
var dataJson = require("@/mockdata/home.json");
export default {
  data() {
    return {
      msg: "ModuleTwo"
    };
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
ul {
  padding: 0.12rem 0;
  display: inline-block;
  a {
    display: block;
  }
  li:nth-child(1) {
    float: left;
    a,
    img {
      width: 3.7rem;
      height: 3.3rem;
      background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
        no-repeat center;
    }
  }
  li:nth-child(2) {
    float: right;
    a,
    img {
      width: 3.7rem;
      height: 1.6rem;
      background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
        no-repeat center;
    }
  }
  li:nth-child(3) {
    float: right;
    margin-top: 0.1rem;
    a,
    img {
      width: 3.7rem;
      height: 1.6rem;
      background: url(https://static.biyao.com/m/img/master/base/depic.png?=biyao00fa500)
        no-repeat center;
    }
  }
}
</style>
