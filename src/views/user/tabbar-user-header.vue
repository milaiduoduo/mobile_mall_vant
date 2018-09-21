<template>
    <div class="userHeadWrap" :style="{backgroundImage:`url(${backgroundImg})`}">
        <van-icon class="icon" name="set" @click="toSetting"></van-icon>
        <div class="user_avatar">
            <img :src="avatarImg" alt="" @click="imgClick" width="55" height="55">
        </div>
        <div class="nickName">{{nick_name}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
import avatarImg_default from "@/assets/images/avatar_default.png";
import bg_default from "@/assets/images/user_head_bg.png";
export default {
  name: "v-user-header",
  data() {
    return {
      backgroundImg: bg_default,
      avatarImg: avatarImg_default,
      nick_name: "昵称"
    };
  },
  methods: {
    toSetting() {
      this.$router.push({ name: "userInfomation" });
    },
    imgClick() {
      this.$router.push({ name: "userInfomation" });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.userHeadWrap {
  position: relative;
  height: px2rem(260);
  line-height: px2rem(260);
  text-align: center;
  background-repeat: no-repeat;
  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: px2rem(48);
  }
  .user_avatar {
    display: inline-block;
    text-align: center;
    margin-bottom: px2rem(20);
    img {
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .nickName {
    position: absolute;
    bottom: 10px;
    line-height: 1;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
