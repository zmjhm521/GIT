<script setup>
import { ref } from "vue"
import A from "./components/A.vue"
import B from "./components/b.vue"
const isShow = ref(true)
</script>

<template>
  <div>
    <!-- 
      componet是一个动态组件 
       -component最终以什么标签呈现是由is属性决定
    -->
    <component :is="isShow ? A : B"></component>
    <button @click="isShow = !isShow">切换</button>
  </div>

</template>

<style scoped>

</style>
