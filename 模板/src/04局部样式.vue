<script setup>
import MyBox from "./components/MyBox.vue";


</script>
<template>
    <div class="app">
        <h2>今天天气真不错</h2>
        <div class="box1">App中的box1</div>
        <MyBox></MyBox>
    </div>
</template>
<!-- 
    可以直接通过style标签来编写样式
        如果通过style标签编写的样式，此时编写的样式是全局样式，
        会影响所有的组件
 -->
 <!-- 
    可以为style标签添加一个scoped属性，
    使样式成为局部样式，只对当前组件生效
如何实现的？
    使用scoped时，vue会自动为组件中所有元素添加一个随机的属性
    []属性选择器
    - 注意：
        - 随机生成的属性，除了会添加到当前组件上还会添加到引入组件的根元素上，
          这样设计是为了，可以通过父组件来为子组件设置一些样式

 -->
 <style scoped>
 .box1{
    width: 200px;
    height: 200px;
    background-color: #bfa;
}

.app :deep(h2) {
    color:yellow
}
/* :global()全局选择器 */
:global(div){
    border: 1px red solid;
}
</style>
<!-- <style>
div {
    border:1px red solid
}
</style> -->
<!-- <style>
h1 {
    background-color: #bfa;
}

.box1{
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
}
</style> -->