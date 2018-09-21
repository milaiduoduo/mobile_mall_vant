<template>
    <div class="groupWrap">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "v-field-group"
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.groupWrap {
  padding: 0 15px;
  > div {
    margin-bottom: 15px;
    // &:last-child {
    //   margin-bottom: 0;
    // }
  }
}
</style>
