<template>
  <div style="height: 100vh;">
    <Title :childTitle='childTitle'></Title>
    <div class="container">
      <Empty v-if="this.$store.state.cart.Emptylist.length<=0"></Empty>
      <CartList v-else>

      </CartList>
    </div>
    <NavFooter :actives="2"></NavFooter>
  </div>
</template>
<script>
import Empty from "@/components/Cart/Empty";
import CartList from "@/components/Cart/CartList";
import NavFooter from "@/components/NavFooter";
import Title from "@/components/Classify/Title";
export default {
  data() {
    return {
      msg: "cart",
      childTitle: "购物车"
    };
  },
  mounted() {
    // console.log(this.$store.state.cart);
  },
  //   组件
  components: {
    NavFooter,
    Title,
    Empty,
    CartList
  }
};
</script>

<style lang="scss"  type="text/css">
.container {
  position: relative;
  width: 100%;
  min-height: 75%;
  background-color: #f2f2f2;
  padding-bottom: 1.98rem;
}
.van-checkbox--checked {
  color: #fff;
  border-color: #7f4395;
  background-color: #7f4395;
}
</style>
