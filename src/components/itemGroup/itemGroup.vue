<template>
    <div class="items_group">
        <van-cell-group>
            <van-cell>
                <template slot="icon">
                    <van-icon v-if="group.icon" :name="group.icon"></van-icon>
                </template>
                <template slot="title">
                    <span class="group_title">{{group.title}}</span>
                    <span class="more">查看更多...</span>
                </template>
            </van-cell>
        </van-cell-group>
        <div class="group_banner" v-if="group && group.bannerUrl">
                <img v-lazy="group.bannerUrl" alt="海报" width="100%">
        </div>
        <div class="item_scroll_box">
            <div class="item_scroll">
                <div class="itemWrap" v-for="(item,index) in group.items" :key="index">
                    <div class="itemLeft">
                        <img v-lazy="item.itemUrl" alt="">
                    </div>
                    <div class="itemRight">
                        <div class="item_title">{{item.title}}</div>
                        <div class="item_comments">评论数：{{item.comments}}</div>
                        <div class="item_price">￥{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "item-group",
  props: {
    group: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    console.log("group:", this.group);
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
@import "../../assets/scss/mixin/border-1px.scss";
.items_group {
  background: $bg-color;
}
.van-icon {
  line-height: 24px;
  margin-right: 3px;
}
.van-icon,
.van-cell {
  font-size: 18px;
}
.van-cell {
  position: relative;
  padding: 10px 5px;
}
.more {
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: $more-common;
}
.itemWrap {
  display: flex;
  padding: 10px;
  @include border-1px($white);
  .itemLeft {
    flex: 1 1 20%;
    margin-right: 10px;
    img {
      width: 100%;
    }
  }
  .itemRight {
    position: relative;
    flex-grow: 3;
    padding: 10px;
    .item_price {
      position: absolute;
      bottom: 5px;
    }
    .item_comments {
      position: absolute;
      right: 10px;
      bottom: 5px;
    }
  }
}
</style>

