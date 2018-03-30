<template>
  <div>
    <Search></Search>
    <HeaderNav></HeaderNav>
    <CateList :titleShow="true"></CateList>
    <NavFooter :actives="0"></NavFooter>
  </div>
</template>
<script>
import Search from "@/components/Search";
import HeaderNav from "@/components/home/HeaderNav";
import CateList from "@/components/Classify/CateList";
import NavFooter from "@/components/NavFooter";
export default {
  data() {
    return {
      msg: "OldClassify"
    };
  }, //   组件
  components: {
    Search,
    HeaderNav,
    CateList,
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
