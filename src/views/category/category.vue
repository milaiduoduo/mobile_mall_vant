<template>
    <div class="wrap">
        <search-head></search-head>
        <category-tree :categorys="categorys"></category-tree>
    </div>
</template>

<script type="text/ecmascript-6">
import searchHead from "@/components/searchHead/searchHead";
import CategoryTree from "@/components/categoryTree/categoryTree";
export default {
  components: {
    "search-head": searchHead,
    "category-tree": CategoryTree
  },
  data() {
    return {
      categorys: [
        { name: "短T恤" },
        { name: "短裤" },
        { name: "凉鞋" },
        { name: "长袖T恤" },
        { name: "外套" },
        { name: "长裤" },
        { name: "运动鞋" }
      ]
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

