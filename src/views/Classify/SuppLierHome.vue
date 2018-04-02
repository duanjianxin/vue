<template>
  <div>
    <Title :childTitle='childTitle'></Title>
    <SupHeader :childTitle='childTitle'></SupHeader>
    <CateList :titleShow="false"></CateList>
    <ReturnTop></ReturnTop>
  </div>
</template>

<script>
import Title from "@/components/Classify/Title";
import SupHeader from "@/components/Classify/SupHeader";
import ReturnTop from "@/components/ReturnTop";
import CateList from "@/components/Classify/CateList";
export default {
  data() {
    return {
      msg: "supplierHome",
      childTitle: "TOM FOSSEY  男装"
    };
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  },
  components: {
    Title,
    SupHeader,
    CateList,
    ReturnTop
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
