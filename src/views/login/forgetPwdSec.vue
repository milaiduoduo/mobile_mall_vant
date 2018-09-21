<template>
    <v-notabbar-composite-g>
        <v-field 
        v-model="password" 
        icon="lock" 
        type="password" 
        right-icon="clear-full" 
        :is-error="isError"
        placeholder="请输入新密码" 
        @right-click="clearText({name:'password'})"></v-field>
        <v-field 
        v-model="passwordRepeat" 
        icon="lock" 
        type="password" 
        right-icon="clear-full" 
        :is-error="isError" 
        placeholder="请再次输入密码" 
        @right-click="clearText({name:'passwordRepeat'})"></v-field>
        <div class="notice" v-show="isError">两次密码输入不一致</div>
        <div class="btnWrap submitBtn">
            <van-button size="large" type="danger" @click="onSubmit">重置</van-button>
        </div>
    </v-notabbar-composite-g>
</template>

<script type="text/ecmascript-6">
import vNotabbarCompositeG from "@/components/notabbarCompositeG/notabbarCompositeG";
import vField from "@/components/field/field";
export default {
  data() {
    return {
      password: "",
      passwordRepeat: "",
      isError: true
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
      this.$router.push({
        name: "registerStatus",
        params: { status: "success" } //取值success或者fail.动态路由配置：path: "/register/registerStatus/:status",
      });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
