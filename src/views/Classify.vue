<template>
    <div>
        <Search></Search>
        <Section></Section>
        <NavFooter></NavFooter>
    </div>
</template>
<script>
import Search from "@/components/Search";
import Section from "@/components/Section";
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
