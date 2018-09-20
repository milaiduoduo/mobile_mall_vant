<template>
   <div class="child1Wrap">
     <h2>二、我是child1.vue!!!</h2>
    <h2>1.被child1.vue使用的props是【a1】: {{a1}}</h2>
    <h2>2.剩余未被使用的attrs有: {{$attrs}}</h2>
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
   </div>
    
</template>

<script type="text/ecmascript-6">
import child2 from "./child2.vue";
export default {
  components: { child2 },
  props: ["a1"],
  inheritAttrs: false, //设置inheritAttrs属性为false，父组件传递下来的未被child1.vue使用的props将不会在应用到子组件的根元素上。
  //应用前：
  //<div data-v-42136c0c="" data-v-356298be="" class="child1Wrap" b1="hellow b1!"><h3 data-v-42136c0c="">hellow a1!</h3></div>
  //应用后：
  //<div data-v-42136c0c="" data-v-356298be="" class="child1Wrap"><h3 data-v-42136c0c="">hellow a1!</h3></div>
  created() {
    console.log("【in child1】 $attrs are: ", this.$attrs);
  },
  mounted() {
    this.$emit("test1");

    console.log("this.$listeners: ", this.$listeners);
  },
  methods: {
    onEvent3() {
      console.log(
        "我是【child1】，这是从【child3】组件中触发的事件，且继续$emit到【parent】"
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
.child1Wrap {
  background: cadetblue;
  padding: 5px;
}
</style>
