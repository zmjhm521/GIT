<script setup>
import { ref } from "vue"
const arr = ref(["孙悟空", "猪八戒", "沙和尚", "唐僧"])
const arr2 = ref([
  {
    id: 1,
    name: "孙悟空",
    age: 18
  },
  {
    id: 2,
    name: "猪八戒",
    age: 28
  },
  {
    id: 3,
    name: "沙和尚",
    age: 38
  }
])
</script>

<template>
  <div>
    <button @click="arr2.unshift({ id: 4, name: '白骨精', age: 16 })">点我一下</button>
    <ul>
      <li v-for="name in arr">{{ name }}</li>
    </ul>
    <ul>
      <li v-for="(name, index) in arr">{{ index }}--{{ name }}</li>
    </ul>
    <div v-for="obj in arr2">{{ obj.id }}--{{ obj.name }}--{{ obj.age }}</div>
    <hr>
    <template v-for="obj in arr2">{{ obj.id }}--{{ obj.name }}--{{ obj.age }}</template>
    <hr>
    <!-- 使用v-for遍历时，旧的结构和新的结构是按照顺序进行对比的 
          使用v-for时可以为元素指定一个唯一的key
          有了key以后，元素再比较时就会按照相同的key去比较而不是顺序-->
    <ul>
      <li v-for="{ id, name, age } in arr2" :key="id">{{ id }}--{{ name }}--{{ age }}
      <input type="text">
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>
