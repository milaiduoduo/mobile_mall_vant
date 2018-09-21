<template>
<div class="userOrderWrap">
    <van-cell-group>
        <van-cell title="我的订单" class="titleWrap">
            <router-link :to="{name:'login'}">全部订单</router-link>
        </van-cell>
        <van-row class="order_status">
            <van-col span="6">
                <div class="order_status_icon" @click="daifukuanClick">
                    <van-icon name="daifukuan"></van-icon>
                </div>
                <div>待付款</div>
            </van-col>
            <van-col span="6">
                <div class="order_status_icon" @click="daifahuoClick">
                    <van-icon name="daifahuo" info="1"></van-icon>
                </div>
                <div>待发货</div>
            </van-col>
            <van-col span="6">
                <div class="order_status_icon" @click="wuliuClick">
                    <van-icon name="wuliu" info="3"></van-icon>
                </div>
                <div>待收货</div>
                </van-col>
            <van-col span="6">
                <div class="order_status_icon" @click="shouhouguanliClick">
                    <van-icon name="shouhouguanli"></van-icon>
                </div>
                <div>退货售后</div>
            </van-col>
        </van-row>
    </van-cell-group>

</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "v-order-group"
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
@import "../../assets/scss/mixin/border-1px";
.titleWrap {
    a {
      color: $link-color;
    }
  }
.order_status {
  // background-color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  

  > div {
    @include border-1px($white);
    &::after {
      top: 50%;
      left: 50%;
      border-bottom: 0;
      border-right: 1px solid $border-color;
      height: 150%;
      transform: scale(0.5) translate3d(-50%, -50%, 0);
      transform-origin: 0 0;
    }
    &:last-child::after {
      border: 0;
    }
  }

  .order_status_icon {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-block;
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0); //GPU加速
      font-size: 24px;
      color: #000;
    }
  }
}
i {
  font-size: 24px;
  color: #000;
}
</style>
