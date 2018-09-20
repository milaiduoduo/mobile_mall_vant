<template>
   <div class="child3Wrap">
     <h2>四、我是child3.vue!!!</h2>
    <h2>1.被child13.vue使用的props是【c1】: {{c1}}</h2>
    <h2>2.剩余未被使用的attrs有: {{$attrs}}</h2>
    <hr>
    <h3>1.按钮触发事件,传到我的各层父级。</h3>
    <button @click="btnClick">按钮</button>
    <div>
        <h3>2.input事件触发，也能传到各层父级。</h3>
         <input type="text" @input="handleInput" placeholder="我输入的内容可以传到我的各层父级">
    <div>输入的内容是：{{message}}</div>
    </div>
   
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["c1"],
  data() {
    return { message: "" };
  },
  created() {
    console.log("【in child3】 $attrs are: ", this.$attrs);
  },
  mounted() {
    this.$emit("test3");
    this.$emit("sig_event3");
  },
  methods: {
    btnClick() {
      this.$emit("btnClickFromC3");
    },
    handleInput(e) {
      this.message = e.target.value;
      this.$emit("handleInputFromC3", this.message);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
h1,
h2 {
  margin: 3px;
}
.child3Wrap {
  background: green;
  padding: 5px 20px;
}
</style>
