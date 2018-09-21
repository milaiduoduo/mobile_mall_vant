<template>
  <v-notabbar-group class="loginWrap">
    <div class="headerWrap">
        <div class="login_avatar">
          <img src="../../assets/images/avatar_default.png" alt="头像" width="55" height="55">
        </div>
    </div>
    <v-field-group class="formWrap">
        <v-field v-model="account" icon="username" right-icon="clear-full" @right-click="clearText"></v-field>
        
        <v-field v-model="password" icon="lock" :type="visiblePass?'text':'password'" :right-icon="visiblePass?'eye-open':'eye-close'" @right-click="visiblePass =!visiblePass"></v-field>
        <div class="forgetWrap">
            <div class="left">可以用微信账号登录</div>
            <div class="right" @click="forgetPwd">忘记密码</div>
        </div>
        <van-button size="large" type="danger" :loading="isLoging" @click="loginSubmit">登录</van-button>  
        <div class="toRegisterWrap clearf">
          <span class="left">联系客服</span>
          <router-link class="right" :to="{name:'register'}">免费注册</router-link>
        </div>    
    </v-field-group>
    <div class="footerWrap">
      <span>技术支持：火山科技</span>
    </div>
    </v-notabbar-group>
</template>
<script type="text/ecmascript-6">
import vNoTabbarGroup from "@/components/notabbarGroup/notabbarGroup";
import vField from "@/components/field/field";
import vFieldGroup from "@/components/fieldGroup/fieldGroup";

export default {
  components: {
    [vField.name]: vField,
    [vFieldGroup.name]: vFieldGroup,
    [vNoTabbarGroup.name]: vNoTabbarGroup
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
    loginSubmit() {
      this.isLoging = true;

      this.$reqGet("/user-login")
        .then(res => {
          // setTimeout(() => {
          console.log("登录成功返回：", res);
          //将access_token存在本地
          this.$util.setLocalStorage({
            Authorization: res.data.data.access_token
          });
          // localStorage.setItem("Authorization", res.data.data.access_token);
          //继续请求用户信息
          return this.$reqGet("/user-profile");
          // }, 3000);
        })
        .then(res => {
          this.isLoging = false;
          const localData = res.data.data;
          console.log("请求用户信息返回：", res.data.data);
          //将必要的用户信息存放到本地存储
          this.$util.setLocalStorage({
            user_id: res.data.data.user_id
          });
          // localStorage.setItem("user_id", res.data.data.user_id);
          //页面跳转
          const redirect = this.$route.query.redirect || "home";
          console.log("redirect:", redirect);
          this.$router.replace({
            name: redirect,
            query: this.$route.query
          });
        })
        .catch(err => {
          console.log("login err: ", err);
          this.isLoging = false;
        });
    },
    forgetPwd() {
      this.$router.push({ name: "forgetPwd" });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
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
  .forgetWrap {
    overflow: hidden;
    font-size: $font-size-normal;
    & > div:nth-of-type(1) {
      color: $red;
    }
  }
}
.toRegisterWrap {
  width: 50%;
  margin: 0 auto;
  padding-top: 40px;
  text-align: center;
  color: $register-color;
  font-size: $font-size-normal;
  & > a {
    color: $register-color;
  }
}
.footerWrap {
  position: absolute;
  width: 100%;
  bottom: px2rem(60);
  color: $register-color;
  text-align: center;
}
</style>
