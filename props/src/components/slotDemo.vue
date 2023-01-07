<script setup>
const stu = {
    stuName: "赵明杰",
    age: 18,
    gender: "男"
}
</script>
<template>
    <div>
        <!-- 可以在slot中指定一个默认内容，默认会在组件中没有内容时显示 -->
        <!-- <h1><slot>插槽默认内容</slot></h1>
         -->
        <h1>
            <slot name="s1"></slot>
        </h1>
        <div><slot name="s2" :stu="stu"></slot></div>
    </div>
</template>