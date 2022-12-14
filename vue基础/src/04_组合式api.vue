<script setup>
import { reactive } from "vue"
const stu = reactive({
  msg: "我爱vue",
  count: 0
})
function fn(){
  alert("哈哈哈")
}

</script>
<template>
  <div>
    <h1>组合式api</h1>
    <button @click="fn">点我一下</button>
    <h2>{{ stu.msg }}---{{ stu.count }}</h2>
  </div>
</template>