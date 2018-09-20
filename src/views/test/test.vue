<template>
  <div>
    <div title="basicUsage">
      <p class="page-desc">121111</p>
      <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item + ''" />
        </van-list>
      <!-- </van-pull-refresh> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1;
          this.list.push(text < 10 ? "0" + text : text);
        }
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.list = [];
        this.finished = false;
        this.refreshing = false;
        window.scrollTo(0, 10);
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.demo-list {
  .van-cell {
    text-align: center;
  }
  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
}
</style>