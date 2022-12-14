<script setup>
import {ref} from "vue"
    const imgPath = ref("/images/chuchu.jpeg")
    const changeImg = ()=>{
        imgPath.value = "/images/chuchu2.jpeg"
    }
    const arrts = {
        id:"box1",
        class:"hello"
    }
    const filename = "filename"
    const filevalue = "chuchu"

    const isDisabled = 0
</script>
<template>
   <!-- 
        当我们需要为标签动态的设置属性时，需要使用v-bind指令
            v-bind可以简写为冒号（:）
        但我们为一个布尔值设置属性时，
            值为true，元素上有该属性（转换后为true，也算true）
            值为false，则元素没有该属性（转换后为false，也算false）
            特殊情况：""会被认为是true
    -->
    <div>
        <!-- <button @click="changeImg">切换图片</button> -->
        <img :[filename]="filevalue" :src="imgPath" alt="楚楚">
        <div v-bind="arrts"></div>
        <input type="text" :disabled="isDisabled" >
    </div>
</template>