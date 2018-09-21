<template>

<v-notabbar-composite-g class="registerWrap">
    <div>我们将把验证码发送到您的手机</div>
    
    <v-field v-model="phoneNum" icon="mobile" right-icon="clear-full" @right-click="clearText" 
    placeholder="请输入手机号"></v-field>
    <div class="btnWrap">
        <van-button size="large" type="danger" @click="submitCode">下一步</van-button>
    </div>
    <div class="footerWrap">
        已有账号？
        <router-link to="{name:'login'}">登录</router-link> 
    </div>
</v-notabbar-composite-g>
</template>

<script type="text/ecmascript-6">
import vField from "@/components/field/field";
import vNotabbarCompositeG from "@/components/notabbarCompositeG/notabbarCompositeG";
export default {
  name: "register",
  components: {
    [vField.name]: vField,
    [vNotabbarCompositeG.name]: vNotabbarCompositeG
  },
  data() {
    return {
      phoneNum: ""
    };
  },
  methods: {
    clearText() {
      this.phoneNum = "";
    },
    submitCode() {
      this.$router.push({ name: "registerSec" });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";

.registerWrap {
  a {
    color: $red;
  }
  .btnWrap {
    margin-top: px2rem(60);
  }
  .footerWrap {
    margin-top: px2rem(70);
    text-align: right;
  }
}
</style>
