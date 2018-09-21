<template>
    <div class="tabbarUserWrap">
        <v-user-header/>
        <v-order-group/>
        <v-user-ecoupon/>
        <v-user-module/>
        <van-button class="btn" size="large" @click="quite">退出当前账户</van-button>
    </div>
</template>

<script type="text/ecmascript-6">
import userHeader from "./tabbar-user-header.vue";
import userOrder from "./tabbar-user-order.vue";
import userEcoupon from "./tabbar-user-ecoupon.vue";
import userModule from "./tabbar-user-module.vue";
export default {
  components: {
    [userHeader.name]: userHeader,
    [userOrder.name]: userOrder,
    [userEcoupon.name]: userEcoupon,
    [userModule.name]: userModule
  },
  methods: {
    quite() {
      console.log("in 退出！");
      this.$util.removeLocalStorage(
        "Authorization",
        "user_id",
        "avatar",
        "background_imagev",
        "nick_name"
      );
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var.scss";
.tabbarUserWrap {
  font-size: $font-size-normal;
  color: $white;
  padding-bottom: px2rem(140);
  > div {
    margin-bottom: px2rem(20);
  }
}
</style>
