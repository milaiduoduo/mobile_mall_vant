<template>
    <div class="items_group">
        <!-- <van-cell-group>
            <van-cell>
                <template slot="icon">
                    <van-icon v-if="icon" :name="icon"></van-icon>
                </template>
                <template slot="title">
                    <span>{{groupTitle}}</span>
                    <slot name="titleDesc">
                        <span class="group_title_desc">{{titleDesc}}</span>
                    </slot>
                </template>
            </van-cell>
        </van-cell-group>
        <div class="group_banner">
            <img :src="bannerUrl" alt="海报" width="100%">
        </div>
        <div class="item_scroll_box">
            <div class="item_scroll" v-scrollArrow="scrollMore">
                <div class="item_scroll_wrap" :style="{width:scrollWidth}">
                    <slot></slot>
                </div>
            </div>
            <transition name="fade">
                <van-icon name="arrow" class="items_arrow right_arrow"></van-icon>
            </transition>
            <transition name="fade">
                <van-icon name="arrow-left" class="items_arrow left_arrow"></van-icon>
            </transition>
        </div> -->
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "item-group",
  props: {
    icon: {
      type: String,
      default: "huida"
    },
    groupTitle: {
      type: String,
      default: "标题"
    },
    titleDesc: {
      type: String,
      default: "副标题"
    },
    bannerUrl: {
      type: String,
      default:
        "https://img14.360buyimg.com/cms/jfs/t16564/101/2253540468/35413/5075c762/5a9faaa4Nbc1c3713.jpg"
    },
    col: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

