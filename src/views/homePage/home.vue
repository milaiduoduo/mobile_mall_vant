<template>
    <div>
        <v-ad-board 
        :adUrl="shopInfo.imgUrl" :shopName="shopInfo.shopName">
        </v-ad-board>  
        <v-ad-shop-info></v-ad-shop-info>
        <v-item-group 
        v-for="(item,index) in itemGroup"
        :key="index"
        :group = item
        ></v-item-group>
    </div>
</template>

<script type="text/ecmascript-6">
import ADBoard from "./adBorad.vue";
import ADShopInfo from "./adShopInfo.vue";
import ItemGroup from "@/components/itemGroup/itemGroup";

let groupData = [
  {
    icon: "shoucang-full",
    title: "宝妈最爱",
    bannerUrl:
      "//img10.360buyimg.com/imgzone/jfs/t20671/298/2043483088/240817/4f4bf40d/5b45e737N3e1577d5.jpg",
    items: [
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      },
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      },
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      }
    ]
  },
  {
    icon: "shoucang-full",
    title: "夏季清仓",
    bannerUrl:
      "//img10.360buyimg.com/imgzone/jfs/t20815/265/2074294137/263057/60aa237f/5b45e737Naef72500.jpg",
    items: [
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      },
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      },
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      }
    ]
  },
  {
    icon: "shoucang-full",
    title: "秋季上新",
    bannerUrl:
      "//img10.360buyimg.com/imgzone/jfs/t23803/70/884234930/209730/46d685d2/5b45e737Nb16516bf.jpg",
    items: [
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      },
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      },
      {
        itemUrl:
          "//img12.360buyimg.com/n1/jfs/t23533/332/2576401802/67260/63e371d9/5b87c12dNba2bc3a0.jpg",
        title: "最爱凉鞋",
        price: "99",
        comments: "1000"
      }
    ]
  }
];

export default {
  name: "homePage",
  components: {
    "v-ad-board": ADBoard,
    "v-ad-shop-info": ADShopInfo,
    "v-item-group": ItemGroup
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
      },
      itemGroup: groupData
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
