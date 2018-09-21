<template>
    <div class="regStatusWrap">
        <div class="contentWrap">
            <van-icon :name="statusIcon" class="icon" :class="statusClass"></van-icon>
            <div>{{statusText}}</div>
        </div>
        <div class="toLoginWrap">
            <span class="time">3秒</span>后返回到登录页，您也可以<router-link to="{name:'login'}">点此登录</router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isSuccess: true
    };
  },
  computed: {
    statusIcon() {
      return this.isSuccess ? "checked" : "fail";
    },
    statusClass() {
      return this.isSuccess ? "success_icon" : "fail_icon";
    },
    statusText() {
      return this.isSuccess ? "注册成功" : "注册失败";
    }
  },
  created() {
    this.isSuccess = this.$route.params.status == "success" ? true : false;
    console.log("注册状态：", this.isSuccess, this.$route.params.status);
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.view-router {
  padding-bottom: 0;
}
.regStatusWrap {
  box-sizing: border-box;
  background: $white;
}
.contentWrap,
.toLoginWrap {
  text-align: center;
}
.contentWrap {
  padding-top: px2rem(60);
  margin-bottom: 15px;
  i {
    margin-bottom: 5px;
  }
  > div {
    font-size: 18px;
  }
}

.contentWrap {
  > .icon {
    font-size: px2rem(120);
  }
}
// .status_icon {
//   font-size: px2rem(160);
// }
i.success_icon {
  //@extend .status_icon;
  color: $success-color;
}
i.fail_icon {
  //@extend .status_icon;
  color: $fail-color;
}
.toLoginWrap {
  .time {
    color: $fail_red;
  }
  > a {
    color: $fail_red;
  }
}
</style>
