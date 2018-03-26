<template>
  <div>
    <Search></Search>
    <HeaderNav></HeaderNav>
    <Banner></Banner>
    <Guarantee></Guarantee>
    <ModuleTwo></ModuleTwo>
    <ModuleOne></ModuleOne>
    <ModuleThree ></ModuleThree>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import "@/util/Adaptation.js";
import Search from "@/components/Search";
import HeaderNav from "@/components/HeaderNav";
import Banner from "@/components/Banner";
import Guarantee from "@/components/Guarantee";
import ModuleTwo from "@/components/ModuleTwo";
import ModuleOne from "@/components/ModuleOne";
import ModuleThree from "@/components/ModuleThree";
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
    Guarantee,
    ModuleTwo,
    ModuleOne,
    ModuleThree,
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.clear {
  clear: left;
}

</style>
