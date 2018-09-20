<template>
<div>
    <div class="parentWrap">
        <h1>一、我是parent</h1>
        <h1>我设置了4个attr,a1,b1,c1,d1</h1>
        <h2>【messageFromC3】: {{messageFromC3}}</h2>
<child1 :a1="a1" :b1="b1" :c1="c1" :d1="d1" @test1="onTest1" @test2="onTest2" @test3="onTest3" @test4="onTest4" @sig_event3="onEvent3" @btnClickFromC3="btnClickFromC3" @handleInputFromC3="handleInputFromC3"></child1>
    </div>
</div>
    
    
</template>

<script type="text/ecmascript-6">
import child1 from "./child1.vue";
export default {
  components: { child1 },
  data() {
    return {
      a1: "hellow a1!",
      b1: "hellow b1!",
      c1: "hellow c1!",
      d1: "hellow d1!",
      messageFromC3: ""
    };
  },
  methods: {
    onTest1() {
      console.log("this event is onTest1");
    },
    onTest2() {
      console.log("this event is onTest2");
    },
    onTest3() {
      console.log("this event is onTest3");
    },
    onTest4() {
      console.log("this event is onTest4");
    },
    onEvent3() {
      console.log("我是【parent】，这是从【child3】组件中触发的事件。");
    },
    btnClickFromC3() {
      console.log("我是【parent】，这是从【child3】组件中触发【btn】事件。");
    },
    handleInputFromC3(msg) {
      this.messageFromC3 = msg;
      console.log("我是【parent】，这是从【child3】组件中触发【input】事件。");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
h1,
h2 {
  margin: 3px;
}
</style>
