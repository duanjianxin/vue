<template>
    <div>
        <NavFooter :actives="3"></NavFooter>
    </div>
</template>
<script>
import NavFooter from "@/components/NavFooter";
export default {
  data() {
    return {
      msg: "Account"
    };
  }, //   组件
  components: {
    NavFooter
  }
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
