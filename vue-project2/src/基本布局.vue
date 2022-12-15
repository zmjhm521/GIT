<script setup>
import { ref } from "vue"
// 创建一个变量来记录选项卡的状态
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
        <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="../images/1.jpeg" style="width: 200px;">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">楚楚</span>
              <div class="hot-bar">
                <div class="inner">433760热度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="current === 1">
        <div class="tab-list">
          <div class="tab-item">
            <!-- 图片 -->
            <div class="photo">
              <img src="../images/3.jpeg" style="width: 200px;">
              <span>1</span>
            </div>
            <!-- 描述 -->
            <div class="desc">
              <span class="name">楚 楚</span>
              <div class="hot-bar">
                <div class="inner">333760热度</div>
              </div>
            </div>
          </div>
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

.tab-item {
  display: flex;
  margin-bottom: 40px;
}

/* 容器 */
.photo {
  width: 150px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

/* 图片标签 */
.photo img {
  width: 100%;
  vertical-align: top;
}

/* 排名 */
.photo span {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 50px;
  height: 50px;
  border-bottom-right-radius: 20px;
  background-color: rgb(245, 102, 1);
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  justify-content: center;
  align-items: center;
}

.desc {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  font-size:40px;
  color: #fff;
  flex: auto;
  margin-left: 30px;
}

.hot-bar {
  background-color: rgb(3, 37, 103);
  border-radius: 20px;
  text-indent: 0.5em;
}

.inner {
  /* background-color: red; */
  border-radius: 20px;
  background-image: linear-gradient(to right,rgb(187,3,52) 50%,rgb(66,2,12));
  width: 10%;
  white-space: nowrap;
}
</style>
