<template>
    <div class="noTabbarWrap">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "v-notabbar-group"
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.view-router {
  padding-bottom: 0;
}
.noTabbarWrap {
  box-sizing: border-box;
  padding-top: 30px;
  font-size: $font-size-normal;
  background: $white;
}
</style>
