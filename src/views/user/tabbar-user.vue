<template>
    <div>
        <user-header></user-header>
        <van-button size="large">退出当前账户</van-button>
    </div>
</template>

<script type="text/ecmascript-6">
import userHeader from "./user-header.vue";
export default {
  components: {
    [userHeader.name]: userHeader
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
