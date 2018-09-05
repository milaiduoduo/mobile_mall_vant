<template>
    <div class="wrap clearf">
        <div class="itemTree left">
            <ul>
                <li v-for="(item,index) in categorys" :key=index
                :class="{active_category:categoryActive==index}"
        @click="categoryClick(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="treeContent">
          
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
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
      categoryActive: 0
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
.wrap {
  height: 100%;
  .itemTree {
    width: 100px;
    height: 100%;
    // background: cadetblue;
    li {
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-left: 2px solid $bg-color;
    }
    li.active_category {
      background: $white;
      border-left: 2px solid $main-color;
    }
  }
  .treeContent {
    height: 100%;
    margin-left: 100px;
    background: pink;
  }
}
</style>

