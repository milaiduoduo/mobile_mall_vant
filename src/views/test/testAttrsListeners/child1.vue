<template>
   <div class="child1Wrap">
    <h3>{{a1}}</h3>
   </div>

</template>

<script type="text/ecmascript-6">
export default {
  props: ["a1"],
  inheritAttrs: false //设置inheritAttrs属性为false，父组件传递下来的未被child1.vue使用的props将不会在应用到子组件的根元素上。
  //应用前：
  //<div data-v-42136c0c="" data-v-356298be="" class="child1Wrap" b1="hellow b1!"><h3 data-v-42136c0c="">hellow a1!</h3></div>
  //应用后：
  //<div data-v-42136c0c="" data-v-356298be="" class="child1Wrap"><h3 data-v-42136c0c="">hellow a1!</h3></div>
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
