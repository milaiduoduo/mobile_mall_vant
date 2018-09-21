<template>
<v-notabbar-composite-g class="forgetPwdWrap">
        <v-field v-model="phoneNum" icon="mobile" right-icon="clear-full" placeholder="请输入手机号" @right-click="clearText({name:'phoneNum'})"></v-field>
        <v-field v-model="checkCode" icon="lock" right-icon="clear-full" placeholder="请输入短信验证码" @right-click="clearText({name:'checkCode'})"></v-field>
        <div class="btnWrap">
            <van-button size="large" type="danger" :loading="isLoging" @click="onSubmit">下一步</van-button>  
        </div>
</v-notabbar-composite-g>
</template>

<script type="text/ecmascript-6">
import vNotabbarCompositeG from "@/components/notabbarCompositeG/notabbarCompositeG";
import vField from "@/components/field/field";
export default {
  data() {
    return {
      phoneNum: "",
      checkCode: "",
      isLoging: false
    };
  },
  components: {
    [vNotabbarCompositeG.name]: vNotabbarCompositeG,
    [vField.name]: vField
  },
  methods: {
    clearText(obj) {
      let arg = obj.name;
      this[arg] = "";
    },
    onSubmit() {
      this.$router.push({ name: "forgetPwdSec" });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.btnWrap {
  margin-top: px2rem(60);
}
</style>
