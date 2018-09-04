<template>
    <div>
        <v-ad-board :adUrl="shopInfo.imgUrl" :shopName="shopInfo.shopName"></v-ad-board>  
        <v-ad-shop-info></v-ad-shop-info>
    </div>
</template>

<script type="text/ecmascript-6">
import ADBoard from "./adBorad.vue";
import ADShopInfo from "./adShopInfo.vue";
export default {
  name: "homePage",
  components: {
    "v-ad-board": ADBoard,
    "v-ad-shop-info": ADShopInfo
  },
  created() {},
  data() {
    return {
      shopInfo: {
        imgUrl:
          "https://img11.360buyimg.com/cms/jfs/t23911/23/259873524/115645/c71d7a/5b2a799eNbec0c29d.jpg",
        shopName: "帅气小怪兽童装店",
        address: "铜仁路8号",
        phone: "133989796321"
      }
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
