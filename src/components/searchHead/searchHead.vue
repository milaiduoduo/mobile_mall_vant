<template>
    <div class="wrap">
        <div class="searchWrap">
            <van-search placeholder="请输入分类名称"></van-search>
            <div class="searchMask" @click="$router.push({name:'itemSearch'})"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {};
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
