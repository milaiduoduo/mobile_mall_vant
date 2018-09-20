<template>
    <div>
        <h1>我是parent</h1>
<child1 :a1="a1" :b1="b1"></child1>
    </div>
    
</template>

<script type="text/ecmascript-6">
import child1 from "./child1.vue";
export default {
  components: { child1 },
  data() {
    return {
      a1: "hellow a1!",
      b1: "hellow b1!"
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
