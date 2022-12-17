<script setup>
// 父组件可以通过props来向子组件传递数据
// 父组件传递给子组件的propos是只读的无法修改
// 即使可以修改，我们也尽量不要在子组件中去修改父组件的数据
// 属性名遵循驼峰命名法
// 定义props
// 简单配置
// const props = defineProps(["count","obj","maxLength"])
// 完整配置
const props =defineProps({
    count:Number,
    obj:Object,
    maxLength:{
        type:String,
        required:true,//必要性
        default:"哈哈",
        validator(value){//非法性检验
            return value === '哈哈'
        }
    }
})
console.log(props);
</script>

<template>
    <div>
        <h2>我是子组件 MyBox{{props.obj.count}}</h2>
        <h1>{{props.maxLength}}</h1>
        <button @click="props.obj.count++">MB的按钮</button>
    </div>
</template>
<style scoped>
div {
    color: red;
}
</style>