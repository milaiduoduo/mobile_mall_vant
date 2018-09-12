<template>
    <div>
        <v-ad-board 
        :adUrl="shopInfo.imgUrl" :shopName="shopInfo.shopName">
        </v-ad-board>  
        <v-ad-shop-info></v-ad-shop-info>
        <van-list 
         v-model="loading" :finished="finished"
         :offset="100"
         >
        <v-item-group 
        v-for="(item,index) in itemGroup"
        :key="index"
        :group = item
        ></v-item-group>
        </van-list>

    </div>
</template>

<script type="text/ecmascript-6">
import ADBoard from "./adBorad.vue";
import ADShopInfo from "./adShopInfo.vue";
import ItemGroup from "@/components/itemGroup/itemGroup";
import loadMore from "@/mixin/list-load-more";

export default {
  name: "homePage",
  components: {
    "v-ad-board": ADBoard,
    "v-ad-shop-info": ADShopInfo,
    "v-item-group": ItemGroup
  },
  mixins: [loadMore],
  data() {
    return {
      shopInfo: {
        imgUrl:
          "https://img11.360buyimg.com/cms/jfs/t23911/23/259873524/115645/c71d7a/5b2a799eNbec0c29d.jpg",
        shopName: "帅气小怪兽童装店",
        address: "铜仁路8号",
        phone: "133989796321"
      },
      shopId: 1,
      itemGroup: function() {
        return [];
      },
      loading: false,
      finished: false
    };
  },
  created() {
    this.initViews();
  },
  methods: {
    initViews() {
      this.$reqGet("/homeGoods", {
        shop_id: this.shopId,
        page: 1,
        "per-page": 8
      }).then(res => {
        let goods = res.data.data;
        console.log("res:", res.data.data);
        this.itemGroup = goods;
      });
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
