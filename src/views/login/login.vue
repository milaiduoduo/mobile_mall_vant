<template>
<div class="loginWrap">
    <div class="headerWrap">
        <div class="login_avatar">
          <img src="../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
        </div>
    </div>
    <div class="formWrap">
        <v_field v-model="account" icon="username" right-icon="clear-full" @right-click="clearText"></v_field>
        
        <v_field v-model="password" icon="lock" :type="visiblePass?'text':'password'" :right-icon="visiblePass?'eye-open':'eye-close'" @right-click="visiblePass =!visiblePass"></v_field>
        <div class="forgetWrap">
            <div class="left">可以用微信账号登录</div>
            <div class="right">忘记密码</div>
        </div>
        <van-button size="large" type="danger" :loading="isLoging" @click="loginSubmit">登录</van-button>      
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import vField from "@/components/field/field";

export default {
  components: {
    [vField.name]: vField
  },
  data() {
    return {
      account: "",
      password: "",
      visiblePass: false,
      isLoging: false
    };
  },
  methods: {
    clearText() {
      this.account = "";
    },
    loginSubmit() {}
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.view-router {
  padding-bottom: 0;
}
.loginWrap {
  background: $white;
}
.headerWrap {
  height: px2rem(260);
  line-height: px2rem(260);
  text-align: center;

  .login_avatar {
    display: inline-block;
    text-align: center;
    margin-bottom: px2rem(20);
    img {
      vertical-align: middle;
      border-radius: 50%;
    }
  }
}
.formWrap {
  padding: 0 15px;
  > div {
    margin-bottom: 15px;
    // &:last-child {
    //   margin-bottom: 0;
    // }
  }
  .forgetWrap {
    overflow: hidden;
    font-size: $font-size-normal;
    & > div:nth-of-type(1) {
      color: $red;
    }
  }
}
</style>
