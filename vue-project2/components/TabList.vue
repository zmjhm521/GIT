<script setup>
// 显示列表，定义参数
import tabitem from './tab-item.vue';
const props = defineProps(["items","maxHot"])
</script>
<template>
    <!-- 球员 -->
    <div class="tab-list">
          <!-- <tabitem :item="players[0]" :max-hot="maxHot"></tabitem>
          <tabitem :item="players[1]" :max-hot="maxHot"></tabitem>
          <tabitem :item="players[2]" :max-hot="maxHot"></tabitem> -->
          <tabitem v-for="player in props.items" :item="player" :max-hot="props.maxHot">
          </tabitem>
        </div>
</template>
<style scoped>
.tab-list {
  margin: 20px;
}
</style>