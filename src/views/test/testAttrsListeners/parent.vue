<template>
<div>
    <div class="parentWrap">
        <h1>我是parent</h1>
        <h1>我设置了4个attr,a1,b1,c1,d1</h1>
<child1 :a1="a1" :b1="b1" :c1="c1" :d1="d1"></child1>
    </div>
</div>
    
    
</template>

<script type="text/ecmascript-6">
import child1 from "./child1.vue";
export default {
  components: { child1 },
  data() {
    return {
      a1: "hellow a1!",
      b1: "hellow b1!",
      c1: "hellow c1!",
      d1: "hellow d1!"
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
