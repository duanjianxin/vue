<template>
  <div>
    <Search></Search>
    <HeaderNav></HeaderNav>
    <Banner></Banner>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import "@/util/Adaptation.js";
import Search from "@/components/Search";
import HeaderNav from "@/components/HeaderNav";
import Banner from "@/components/Banner";
import NavFooter from "@/components/NavFooter";
export default {
  data() {
    return {
      msg: "home"
    };
  },
  //   组件
  components: {
    Search,
    HeaderNav,
    Banner,
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
