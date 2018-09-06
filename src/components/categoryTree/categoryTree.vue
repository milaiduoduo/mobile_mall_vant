<template>
    <div class="wrap clearf">
        <div class="itemTree left">
            <ul>
                <li v-for="(item,index) in categorys" :key=index
               class="border-1px"
                :class="{active_category:categoryActive==index}"
        @click="categoryClick(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="treeContent">
          <div class="all">全部<van-icon  name="arrow"></van-icon></div>
          <div class="itemWrap">
          <div class="item" v-for="(item1,index) in categoryItems" :key=index>
            <div>
              <img  width="80px" height="80px" src="http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg" alt="凉鞋" >
            </div>
            <div>{{item1.title}}</div>
          </div>
          </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
let categoryItemData = [
  {
    imgUrl:
      "http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "http://img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  },
  {
    imgUrl:
      "img30.360buyimg.com/popWaterMark/jfs/t8365/71/665713975/145325/69f3da07/59afa756Nf19bc011.jpg",
    title: "cross beya"
  }
];
export default {
  props: {
    categorys: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      categoryActive: 0,
      categoryItems: categoryItemData
    };
  },
  methods: {
    categoryClick(i) {
      this.categoryActive = i;
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
@import "../../assets/scss/mixin/border-1px.scss";
.wrap {
  height: 100%;
}
.itemTree {
  width: 100px;
  height: 100%;
  // background: cadetblue;
  li {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-left: 2px solid $bg-color;
    @include border-1px($main-color);
    // border-bottom: 1px solid $main-color;
  }
  li.active_category {
    background: $white;
    border-left: 2px solid $main-color;
  }
}
.treeContent {
  height: 100%;
  margin-left: 100px;
  text-align: center;
  background: $white;
  .all {
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding: 0 10px;
    background: $main-color-light;
    color: $white;
  }
  .itemWrap {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 2px;
    .item {
      box-sizing: border-box;
      flex: 0 1 90px;
      margin-bottom: 10px;
      text-align: center;
    }
  }
}
</style>

