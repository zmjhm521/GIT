<script setup>
import { computed } from 'vue';
const props = defineProps(["hot","maxHot"])

const width = computed(()=>{
    // 计算百分比  注意百分比
    return props.hot / props.maxHot * 100 + "%"
})
</script>

<template>
    <div class="hot-bar">
        <div class="inner">{{ props.hot }}热度</div>
    </div>
</template>
<style scoped>
.hot-bar {
    background-color: rgb(3, 37, 103);
    border-radius: 20px;
    text-indent: 0.5em;
}

.inner {
    /* background-color: red; */
    border-radius: 20px;
    width: v-bind(width);
    background-image: linear-gradient(to right, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
    white-space: nowrap;
}

</style>