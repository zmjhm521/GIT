<script setup>
import { ref, reactive } from "vue"
import tabitem from "../components/tab-item.vue"
import TabList from "../components/TabList.vue";
import Tab from "../components/Tab.vue"
// 创建一个变量来记录选项卡的状态
const current = ref(0)//0球员，1球队

const player = reactive({
  name: "楚楚",
  img: "../images/3.jpeg",
  rate: 1,
  hot: 433670,
})
const qiudui = reactive({
  name: "楚 楚",
  img: "../images/1.jpeg",
  rate: 1,
  hot: 333670,
})

const players = reactive([
  {
    name: "楚楚",
    img: "../images/5.jpeg",
    rate: 1,
    hot: 433670,
  },
  {
    name: "楚楚2",
    img: "../images/6.jpeg",
    rate: 2,
    hot: 333670,
  },
  {
    name: "楚楚3",
    img: "../images/7.jpeg",
    rate: 3,
    hot: 233670,
  }
])

const qiuduis = reactive([
  {
    name: "楚楚1",
    img: "../images/1.jpeg",
    rate: 1,
    hot: 333670,
  },
  {
    name: "楚楚",
    img: "../images/2.jpeg",
    rate: 2,
    hot: 323670,
  },
  {
    name: "楚楚",
    img: "../images/3.jpeg",
    rate: 3,
    hot: 313670,
  }
])
// 获取最大热度
const playermaxHot = players[0].hot
const qiuduimaxHot = qiuduis[0].hot
</script>

<template>
<Tab>
  <template #0>
    <TabList :items="players" :max-hot="playermaxHot"></TabList>
  </template>
  <template #1>
    <TabList :items="qiuduis" :max-hot="qiuduimaxHot"></TabList>
  </template>
</Tab>
</template>

<style scoped>

</style>
