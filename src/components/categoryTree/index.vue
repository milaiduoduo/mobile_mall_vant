<template>
    <div class="wrap clearf">
        <div class="itemTree left">
            <ul>
                <li v-for="(item,index) in categorys" :key=index
                :class="{active_category:categoryActive==index}"
                @click="categoryClick(index)">item.name</li>
            </ul>
        </div>
        <div class="treeContent right"></div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    categorys: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>

