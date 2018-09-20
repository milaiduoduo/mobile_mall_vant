<template>
   <div class="child3Wrap">
     <h2>我是child3.vue!!!</h2>
    <h2>1.被child13.vue使用的props是【c1】: {{c1}}</h2>
    <h2>2.剩余未被使用的attrs有: {{$attrs}}</h2>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["c1"]
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.child3Wrap {
  background: green;
  padding: 10px 20px;
}
</style>
