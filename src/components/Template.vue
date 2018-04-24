<template>
  <h1>{{msg}}</h1>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import http from "@/util/http";
import api from "@/util/api";
export default {
  data() {
    return {
      msg: "Template"
    };
  },
  created() {},
  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {},
  // 计算属性
  // Vue的计算属性（computed)的属性会自动混入Vue的实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。这就很强大了，再计算属性中定义的函数里面可以直接使用指向了vue实例的this，异常方便的啊。
  computed: {
    ...mapState([""]),
    ...mapGetters([""])
  },
  // methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
  methods: {
    ...mapMutations([""]),
    ...mapActions([""])
  },
  components: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
  watch: {}
};
</script>

<style lang="scss" scoped="" type="text/css">

</style>
