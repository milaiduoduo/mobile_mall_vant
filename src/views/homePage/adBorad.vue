<template>
    <div class="adBoard">
        <img :src="adUrl" alt="" width="100%" :height="ad_boardHeight">
        <div class="adInfo"> 
            <div class="left">{{shopName}}</div>
            <div class="right isCollect">
                <van-icon name="shoucang-full"/>
                <span>收藏</span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    adUrl: {
      type: String,
      required: true
    },
    shopName: {
      type: String,
      required: true
    }
  },
  data() {
    const clientW =
      document.body.clientWidth || document.documentElement.clientWidth;

    const ad_boardHeight = clientW ? clientW * 3 / 7 : 200;
    console.log("clientW:", clientW, ad_boardHeight);
    return {
      ad_boardHeight
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.adBoard {
  position: relative;
  .adInfo {
    box-sizing: border-box;
    position: absolute;
    bottom: 5px;
    width: 100%;
    padding: 0px 10px;
    color: #fff;
  }
  .isCollect i {
    color: $red;
  }
}
</style>
