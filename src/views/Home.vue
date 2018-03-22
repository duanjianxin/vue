<template>
  <div>
    <Search></Search>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import Search from "@/components/Search";
import NavFooter from "@/components/NavFooter";
import "@/util/Adaptation.js";
export default {
  data() {
    return {
      msg: "home"
    };
  },
  //   组件
  components: {
    Search,
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
