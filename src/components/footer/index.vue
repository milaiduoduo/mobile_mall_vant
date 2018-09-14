<template>
    <van-tabbar v-model="active" class="wrap">
        <van-tabbar-item class="item" v-for="(tab,index) in tabbar"
        :key="index"
        :icon="tab.icon"
        :to="{path:tab.path}"
        :dot="tab.dot"
        :info="tab.info">
        {{tab.name}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script type="text/ecmascript-6">
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: "精选",
          path: "/",
          pathName: "home",
          icon: "compass-full",
          dot: false,
          info: ""
        },
        {
          name: "分类",
          path: "/category",
          pathName: "category",
          icon: "class-full",
          dot: false,
          info: ""
        },
        {
          name: "购物车",
          path: "/order",
          pathName: "cart",
          icon: "cart",
          dot: false,
          info: ""
        },
        {
          name: "我的",
          path: "/user",
          pathName: "user",
          icon: "wode",
          dot: false,
          info: ""
        }
      ]
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  created() {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.wrap {
  z-index: 999;
  .item {
    font-size: $font-size-small;
  }
}
</style>
