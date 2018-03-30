<template>
  <div>
    <Title :childTitle='childTitle'></Title>
    <CateList :titleShow="false"></CateList>
    <ReturnTop></ReturnTop>
  </div>
</template>

<script>
import Title from "@/components/Classify/Title";
import ReturnTop from "@/components/ReturnTop";
import CateList from "@/components/Classify/CateList";
export default {
  data() {
    return {
      msg: "MiddlePage",
      childTitle: "风衣/大衣"
    };
  },
  components: {
    Title,
    CateList,
    ReturnTop
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
