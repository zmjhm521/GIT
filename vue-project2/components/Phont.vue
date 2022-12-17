<script setup>
import { computed } from 'vue';
const props = defineProps(["src","rate"])
// 第一名：254 45 70
// 第二名：245 102 1
// 第三名：247 169 1
// const color = "rgb(254,45,70)"
const color = computed(()=>{
    // 判断颜色的代码
    if (props.rate === 1) {
        return "rgb(254,45,70)"
    }else if(props.rate === 2){
        return "rgb(245,102,1)"
    }else{
        return "rgb(247,169,1)"
    }
})
</script>

<template>
     <!-- 图片 -->
     <div class="photo">
            <img :src="props.src" style="width: 200px;">
            <span>{{props.rate}}</span>
        </div>
</template>

<style scoped>
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
    background-color: v-bind(color);
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    justify-content: center;
    align-items: center;
}
</style>