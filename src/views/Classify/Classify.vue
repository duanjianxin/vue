<template>
  <div>
    <router-view></router-view>
    <Search></Search>
    <Section></Section>
    <NavFooter :actives="1"></NavFooter>
  </div>
</template>
<script>
import Search from "@/components/Search";
import Section from "@/components/Classify/Section";
import NavFooter from "@/components/NavFooter";
export default {
  data() {
    return {
      msg: "Classify"
    };
  }, //   组件
  components: {
    Search,
    Section,
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
