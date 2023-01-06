<script setup>
// Tab组件主要的作用就是在多个选项卡之间进行切换
// 其中显示的主要内容是TabList,而TabList的数据位于App组件中
// 创建一个变量来记录选项卡的状态
import { ref, reactive } from "vue"
const current = ref(0)//0球员，1球队
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
        <slot name="0"></slot>
      </div>
      <div v-show="current === 1">
        <!-- 球队 -->
        <slot name="1"></slot>
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

</style>