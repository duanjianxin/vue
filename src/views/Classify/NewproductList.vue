<template>
  <div>
    <Title :childTitle='childTitle'></Title>
    <NewproductList></NewproductList>
    <ReturnTop></ReturnTop>
  </div>
</template>

<script>
import Title from "@/components/Classify/Title";
import ReturnTop from "@/components/ReturnTop";
import NewproductList from "@/components/Classify/NewproductList";
// var dataJson = require("@/mockdata/NewproductList.json");
export default {
  data() {
    return {
      msg: "NewproductList",
      childTitle: "每日新品"
    };
  },

  components: {
    Title,
    NewproductList,
    ReturnTop
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
