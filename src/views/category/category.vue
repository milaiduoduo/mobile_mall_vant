<template>
    <div class="wrap">
        <div class="searchWrap">
            <van-search placeholder="请输入分类名称"></van-search>
            <div class="searchMask" @click="$router.push({name:'itemSearch'})"></div>
        </div>
        <category-tree :categorys="categorys"></category-tree>
    </div>
</template>

<script type="text/ecmascript-6">
import { Search } from "vant";
import CategoryTree from "@/components/categoryTree/categoryTree";
export default {
  components: {
    [Search.name]: Search,
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
.searchWrap {
  position: relative;
  .searchMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

