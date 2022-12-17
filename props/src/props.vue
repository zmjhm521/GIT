<script setup>
import MyBox from './components/MyBox.vue';
import {ref} from 'vue'
// 布尔值不用指定值，有就是true，无就是false
const count = ref(0)
const obj = ref({
  count:0
})
</script>

<template>
  <div>
    <h1>我是App根组件</h1>
    <MyBox :count="count" :obj="obj" max-length="50"></MyBox>
    <button @click="obj.count++">count++</button>
  </div>

</template>

<style scoped>

</style>
