<template>
<van-cell-group>
    <van-cell>
        <van-notice-bar 
        text="本店国庆优惠酬宾活动，2-5折换季大酬宾，优惠多多，实惠一大波。欢迎新老顾客走过路过不要错过！本店国庆优惠酬宾活动，2-5折换季大酬宾，优惠多多，实惠一大波。欢迎新老顾客走过路过不要错过！！！"
        leftIcon="./static/img/trumpet.png"
        class="movingNotice"></van-notice-bar>
    </van-cell>
    <van-cell icon="dingwei" title="同仁路8号" isLink url="https://www.amap.com/place/B001C8TVLP"></van-cell>
    <van-cell icon="phone">
        <template slot="title">
            <a href="tel:1330987654321">1330987654321</a>
        </template>
    </van-cell>
</van-cell-group>
</template>

<script type="text/ecmascript-6">
import { NoticeBar } from "vant";

export default {
  name: "adShopInfo",
  components: {
    [NoticeBar.name]: NoticeBar
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.van-cell {
  padding: 5px 10px;
}
.movingNotice {
  padding: 6px 0px;
  background: #fff;
}
</style>
