<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <!-- <h3>{{$store.state.count}}-----{{count}}</h3> -->
        <h3>{{count}}</h3>
        <p>
            <button @click="$store.commit('add',20)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addActions">+</button>
            <button @click="reduceActions">-</button>
        </p>
    </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "hello,vuex"
    };
  },
  store,
  computed: {
    ...mapState(["count"])
    // count() {
    //   return this.$store.getters.count;
    // }
    // ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addActions", "reduceActions"])
  }
};
</script>
<style>

</style>
