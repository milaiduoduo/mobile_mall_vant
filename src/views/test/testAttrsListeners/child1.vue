<template>
   <div class="child1Wrap">
     <h2>我是child1.vue!!!</h2>
    <h2>1.被child1.vue使用的props是【a1】: {{a1}}</h2>
    <h2>2.剩余未被使用的attrs有: {{$attrs}}</h2>
    <br><br>
    <child2 v-bind="$attrs"></child2>
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
    console.log(this.$attrs);
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.child1Wrap {
  background: cadetblue;
  padding: 5px;
}
</style>
