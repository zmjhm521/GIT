<script setup>
import MyBox from "./components/MyBox.vue";


</script>
<template>
    <div class="app">
        <h2>今天天气真不错</h2>
        <div :class="$style.box1">App中的box1</div>
        <MyBox></MyBox>
    </div>
</template>
<!-- 
    css模块中的类名自动进行hash化，确保类型名的唯一性 
    在模板中可以通过$style.类名使用
    也可以通过module的属性值来指定变量名
-->
<style module>
.box1{
    background-color: #bfa;
}
</style>
