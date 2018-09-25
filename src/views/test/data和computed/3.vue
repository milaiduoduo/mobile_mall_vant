<template>
  <div>
       <button @click="objChange">对象变量值的属性+10</button>
        <!-- <button @click="zhiChange">no1值变量+10</button>
    <h2>点击按钮后，data中的no1值变量，变化为：{{no1}}</h2>
    <h2>点击按钮后，computed中的c_no1值变量，变化为：{{no1}}</h2> -->
    <hr>
    <h2>点击按钮后，computed中的obj1对象变量，变化为：{{obj1}}</h2>
    <h2>点击按钮后，computed中的c_obj1对象变量，变化为：{{c_obj1}}</h2>
    <hr>
    <h1>computed定义的属性会随它的赋值变量的变化而变化</h1>
   
  </div>
</template>

<script>
let outer_obj1 = { no: 30 };
export default {
  data() {
    return {
      obj1: outer_obj1.no,
      no1: 10
    };
  },
  computed: {
    c_obj1() {
      return outer_obj1.no;
    },
    c_no1() {
      return this.no1;
    }
  },
  methods: {
    objChange() {
      outer_obj1.no += 10;
      console.log(outer_obj1.no, this.c_obj1);
    },
    zhiChange() {
      this.no1 += 10;
    }
  }
};
</script>

<style>
</style>