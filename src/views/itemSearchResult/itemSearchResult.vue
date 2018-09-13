<template>
<div>
    <form action="" @submit="_disabledSubmit">
        <van-search placeholder="请输入商品名称" autofocus @search="_searchClick" v-model="searchWord"></van-search>
    </form>
    <section>
        <div v-for="(item,index) in titles" :key="index" class="titles">
            {{item}}
        </div>
        <div class="typesWrap">
            <span v-for="(item,index) in typeAndBrand" :key="index" class="type"></span>
        </div>
    </section>
    <van-list v-model="loading" :finished="finished" :offset="100" @load="loadMore">
        <div class="item_scroll_box">
            <div class="item_scroll">
                <div class="itemWrap" v-for="(item,index) in goods" :key="index">
                    <div class="itemLeft">
                        <img v-lazy="item.itemUrl" alt="">
                    </div>
                    <div class="itemRight">
                        <div class="item_title">{{item.title}}</div>
                        <div class="item_comments"><van-icon name="plus"></van-icon></div>
                        <div class="item_price">￥{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </van-list>
</div>
</template>

<script type="text/ecmascript-6">
import loadMore from "@/mixin/list-load-more";
export default {
  props: {
    searchWord: ""
  },
  mixins: [loadMore],
  data() {
    return {
      titles: [],
      typeAndBrand: [],
      goods: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    getGoods() {
      this.$reqGet("/searchGoods", {
        page: 1,
        "per-page": 8
      }).then(res => {
        let goods = res.data.data.items;

        this.goods = goods;
        console.log("search Data:", goods);
      });
    },
    _disabledSubmit() {
      return false;
    },
    _searchClick() {},
    initData() {
      return this.$reqGet(
        "/searchGoods",
        {
          "per-page": this.pages.perPage,
          page: this.pages.currPage
        },
        {
          hideLoading: true
        }
      ).then(res => {
        const { items, page } = res.data.data;
        this.goods.push(...items);
        return page;
      });
    }
  },
  created() {
    this.getGoods();
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
@import "../../assets/scss/mixin/border-1px.scss";
.itemWrap {
  display: flex;
  padding: 10px;
  @include border-1px($white);
  .itemLeft {
    flex: 1 1 15%;
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
