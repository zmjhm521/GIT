<script setup>
import slotDemo from './components/slotDemo.vue';
import A from './components/A.vue';
const name = "赵明杰"
</script>

<template>
<div>
  <h1>App组件</h1>
  <!-- 直接写在组件中内容时默认插槽的内容，只会出现在默认插槽中（没有name属性的插槽） -->
  <slotDemo>
    <!-- 直接传值 -->
    <!-- <A name="赵明杰"></A> -->
    
    哈哈哈
    <template #s1>s1插槽</template>
    <template #s2="slotProps">{{ slotProps }}<A :name="slotProps.stu.stuName"></A></template>
  </slotDemo>
</div>
</template>

<style scoped>

</style>
