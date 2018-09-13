<template>
    <div>
        <form action="/">
            <van-search placeholder="请输入商品名称" autofocus @search="_searchClick" v-model="searchWord"></van-search>
        </form>
        <section class="hotWord">
            <span class="title">热门搜索</span> 
            <div class="hotWrap">
<span class="hotItem" v-for="(item,index) in hotWords" :key="index">{{item}}</span>
            </div>
            
        </section>
        <section class="searchHistory">
            <span class="title">历史搜索</span>
            <ul class="historyWrap">
                <li class="historyItem" v-for="(item,index) in historyList" :key="index">{{item}}<van-icon class="icon right" name="cancel" @click="_deleteHisItem"></van-icon></li> 
            </ul>
            <span class="clean" @click="_cleanHistory">清除搜索历史</span>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
let hotData = ["洞洞鞋", "毛毛虫", "T恤", "鸭舌帽", "长袖", "背心", "太阳镜"];
let his_item = ["洞洞鞋", "毛毛虫", "T恤", "鸭舌帽", "长袖", "背心", "太阳镜"];
export default {
  data: function() {
    return {
      searchWord: "",
      hotWords: hotData,
      historyList: function() {
        return new Array();
      }
    };
  },
  methods: {
    _searchClick() {},
    _cleanHistory() {},
    _deleteHisItem() {}
  },
  mounted() {
    this.historyList = his_item;
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/mixin/border-1px.scss";
@import "../../assets/scss/var";

.hotWord,
.searchHistory {
  padding: 15px;
  margin-bottom: 10px;
  color: $gray-h-dark;
  background: $white;
  .title {
    display: block;
    font-size: 18px;
    padding-bottom: 15px;
  }
}
.hotWord {
  .hotWrap {
    margin-top: 10px;
    padding-bottom: 10px;
    // background: yellow;
    .hotItem {
      display: inline-block;
      padding: 10px 10px;
      margin: 5px;
      border: 1px solid $gray-dark;
      line-height: 0.8;
      border-radius: 10px;
      color: $black;
    }
  }
}
.searchHistory {
  .title {
    @include border-1px($gray-dark);
  }
  .historyItem {
    padding: 10px 0px;
    @include border-1px($gray-dark);
    overflow: hidden;
    .icon {
      padding-top: 3px;
    }
  }
  .clean {
    display: block;
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
    color: $main-color-light;
    // background: red;
  }
}
</style>