<script setup>
import { ref, reactive } from "vue"
import tabitem from "../components/tab-item.vue"
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
  <!-- 选项卡的外部容器 -->
  <div class="tab-wrapper">
    <!-- 选项卡头部 -->
    <header class="tab-head">
      <div class="tab-button" :class="{ active: current === 0 }" @click="current = 0">热门球员</div>
      <div class="tab-button" :class="{ active: current === 1 }" @click="current = 1">热门球队</div>
    </header>
    <!-- 选项卡主体 -->
    <div class="main">
      <!-- 
        current===0显示球员
        current===1显示球队
          v-show指令，用来设置一个内容是否显示
            v-show设置一个内容是否显示时，是通过display来设置的

       -->
      <div v-show="current === 0">
        <!-- 球员 -->
        <div class="tab-list">
          <!-- <tabitem :item="players[0]" :max-hot="maxHot"></tabitem>
          <tabitem :item="players[1]" :max-hot="maxHot"></tabitem>
          <tabitem :item="players[2]" :max-hot="maxHot"></tabitem> -->
          <tabitem v-for="player in players" :item="player" :max-hot="playermaxHot">
          </tabitem>
        </div>
      </div>
      <div v-show="current === 1">
        <!-- 球队 -->
        <div class="tab-list">
          <tabitem v-for="qiudui in qiuduis" :item="qiudui" :max-hot="qiuduimaxHot"></tabitem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-wrapper {
  box-sizing: border-box;
  width: 800px;
  padding: 20px;
  background-color: rgb(45, 83, 211);
  margin: 50px auto;
}

.tab-head {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}

.tab-button {
  background-color: white;
  font-size: 30px;
  padding: 10px 0;
  text-align: center;
  flex: auto;
  cursor: pointer;
  transition: 0.5s;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);
}

.active {
  background-color: rgb(187, 3, 52);
  color: #fff;
}

.tab-list {
  margin: 20px;
}
</style>
