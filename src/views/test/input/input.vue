<template>
<div>
    <h1>输入框值：{{val}}</h1>
<input type="text" :value="val" @input="change">
</div>

</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      val: ""
    };
  },
  methods: {
    change(event) {
      this.val = event.target.value;
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
