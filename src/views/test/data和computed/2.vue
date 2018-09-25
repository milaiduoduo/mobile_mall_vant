<template>
  <div>
    <h2>num1是data中的变量，其初始值为：{{num1}}</h2>
    <h2>点击按钮后，data中的num1变化为：{{num1}}</h2>
    <h2>点击按钮后，computed中的c_num1变化为：{{c_num1}}</h2>
    <button @click="outerNumChange">给num1+10</button>
      <hr>
    <h1>1.data定义的属性不会因为它的赋值变量的变化而变化</h1>
    <h1>2.computed定义的属性会随它的赋值变量的变化而变化</h1>
  </div>
</template>

<script>
let outer_obj1 = { no: 30 };
export default {
  data() {
    return {
      mm: outer_obj1,
      num1: outer_obj1.no
    };
  },
  computed: {
    c_num1() {
      return outer_obj1.no;
    }
  },
  methods: {
    outerNumChange() {
      outer_obj1.no += 10;
      console.log(outer_obj1.no);
    }
  }
};
</script>

<style>
</style>
