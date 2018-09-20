<template>
   <div class="child2Wrap">
     <h2>三、我是child2.vue!!!</h2>
    <h2>1.被child12.vue使用的props是【b1】: {{b1}}</h2>
    <h2>2.剩余未被使用的attrs有: {{$attrs}}</h2>
    <child3 v-bind="$attrs" v-on="$listeners"></child3>
   </div>
</template>

<script type="text/ecmascript-6">
import child3 from "./child3";
export default {
  props: ["b1"],
  components: {
    child3
  },
  created() {
    console.log("【in child2】 $attrs are: ", this.$attrs);
  },
  mounted() {
    this.$emit("test2");
  },
  methods: {
    onEvent3() {
      console.log(
        "我是【child2】，这是从【child3】组件中触发的事件，且继续$emit到【child1】"
      );
      this.$emit("sig_event3");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
h1,
h2 {
  margin: 3px;
}
.child2Wrap {
  background: pink;
  padding: 5px 20px;
}
</style>
