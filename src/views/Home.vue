<template>
  <div>
    <Search></Search>
    <HeaderNav></HeaderNav>
    <Banner></Banner>
    <Guarantee></Guarantee>
    <ModuleTwo></ModuleTwo>
    <ModuleOne></ModuleOne>
    <ModuleThree class="ModuleThree"></ModuleThree>
    <ReturnTop></ReturnTop>
    <div class="dropload-down"></div>
    <NavFooter :actives="0"></NavFooter>
  </div>
</template>
<script>
import "@/assets/util/Adaptation.js";
import Search from "@/components/Search";
import HeaderNav from "@/components/home/HeaderNav";
import Banner from "@/components/home/Banner";
import Guarantee from "@/components/home/Guarantee";
import ModuleTwo from "@/components/home/ModuleTwo";
import ModuleOne from "@/components/home/ModuleOne";
import ModuleThree from "@/components/home/ModuleThree";
import ReturnTop from "@/components/ReturnTop";
import NavFooter from "@/components/NavFooter";
import axios from "axios";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      msg: "home"
    };
  },
  created() {
    this.getHomedatas();
  },
  mounted() {},
  methods: {
    ...mapActions(["getHomedatas"])
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
    ReturnTop,
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.clear {
  clear: left;
}

.dropload-down {
  display: block;
  height: 1rem;
}
.ModuleThree {
  display: inline-block;
}
</style>
