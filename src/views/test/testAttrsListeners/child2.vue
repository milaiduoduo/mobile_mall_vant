<template>
   <div class="child2Wrap">
     <h2>我是child2.vue!!!</h2>
    <h2>1.被child12.vue使用的props是【b1】: {{b1}}</h2>
    <h2>2.剩余未被使用的attrs有: {{$attrs}}</h2>
    <child3 v-bind="$attrs"></child3>
   </div>
</template>

<script type="text/ecmascript-6">
import child3 from "./child3";
export default {
  props: ["b1"],
  components: {
    child3
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.child2Wrap {
  background: pink;
  padding: 10px 20px;
}
</style>
