<template>
<v-notabbar-composite-g class="regSecWrap">
    <!-- <v-field-group> -->
        <v-field v-model="phoneNum" icon="mobile" 
            placeholder="请输入验证码"></v-field>
        <v-field v-model="password" icon="lock" :type="visiblePass?'text':'password'"           :right-icon="visiblePass?'eye-open':'eye-close'" @right-click="visiblePass =!visiblePass"
             placeholder="请输入密码"></v-field>
        <v-field v-model="repeatPassword" icon="lock" :type="visiblePass2?'text':'password'" :right-icon="visiblePass2?'eye-open':'eye-close'" @right-click="visiblePass2 =!visiblePass2"
            placeholder="请再次输入密码"></v-field>
        <van-button class="btnWrap" size="large" type="danger" :loading="isLoging" @click="registerSubmit">确定</van-button> 
    <!-- </v-field-group> -->
</v-notabbar-composite-g>
</template>

<script type="text/ecmascript-6">
import vNotabbarCompositeG from "@/components/notabbarCompositeG/notabbarCompositeG";
import vField from "@/components/field/field";
export default {
  name: "v-registerSec",
  data() {
    return {
      phoneNum: "",
      password: "",
      repeatPassword: "",
      visiblePass: false,
      visiblePass2: false,
      isLoging: false
    };
  },
  components: {
    [vField.name]: vField,
    [vNotabbarCompositeG.name]: vNotabbarCompositeG
  },
  methods: {
    registerSubmit() {
      this.$router.push({
        name: "registerStatus",
        params: { status: "success" } //取值success或者fail.动态路由配置：path: "/register/registerStatus/:status",
      });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.regSecWrap {
  .btnWrap {
    margin-top: px2rem(60);
  }
}
</style>
