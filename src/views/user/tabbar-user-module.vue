<template>
    <div class="userModuleWrap">
        <van-cell-group>
            <van-cell icon="shoucang" title="我的收藏" isLink></van-cell>
            <van-cell icon="shoucang" title="我的金豆" isLink></van-cell>
            <van-cell icon="shoucang" title="收货地址" isLink></van-cell>
            <van-cell icon="shoucang" title="实名认证" isLink></van-cell>
            <van-cell icon="shoucang" title="服务中心" isLink></van-cell>
        </van-cell-group>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "v-user-module"
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.userModuleWrap {
  background: $white;
}
</style>
