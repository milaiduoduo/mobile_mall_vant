<template>
<div>
  <div class="fieldWrap" :class="{field_hasIcon:!!icon,field_isErr:isError}">
    <van-icon class="field_icon" :name="icon"></van-icon>
    <div class="fieldControl">
      <input :type="type" :value="value" v-on="listeners" v-bind="$attrs">
    </div>
    <div>
      <slot name="rightContent">
          <van-icon :name="rightIcon" @click="rightClick" v-show="value"></van-icon>
      </slot>
    </div>
</div>
</div>

</template>

<script type="text/ecmascript-6">
export default {
  name: "v-field",
  props: {
    icon: String,
    rightIcon: String,
    value: {},
    type: {
      type: String,
      default: "text"
    },
    isError: Boolean
  },
  methods: {
    rightClick() {
      this.$emit("right-click");
    },
    onInput(event) {
      this.$emit("input", event.target.value);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput
      };
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/var";
.fieldWrap {
  position: relative;
  display: table;
  width: 100%;
  margin-top: px2rem(20);
  border-radius: px2rem(10);
  border: 1px solid $border-color;
  padding: px2rem(20) px2rem(0) px2rem(20) px2rem(0);
  box-sizing: border-box;
  background: $white;
  > div {
    display: table-cell;
  }
  .field_icon {
    position: absolute;
    top: 50%;
    left: px2rem(20);
    transform: translateY(-50%);
  }
  .fieldControl {
    padding-right: px2rem(20);
    input {
      width: 100%;
      line-height: px2rem(28);
      font-size: px2rem(28);
      padding: px2rem(10);
      border: 0;
      box-sizing: border-box;
    }
  }
}
.field_hasIcon {
  padding-left: px2rem(80);
}
.field_isErr {
  color: $red;
  background-color: #fcf5f5;
  border: 1px solid $red;
  input {
    color: $red;
    background-color: #fcf5f5;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fcf5f5 inset !important;
  }
}
</style>
