<script setup>
import myButton from './components/myButton.vue';
import A from './components/A.vue'
import myWrapper from './components/myWrapper.vue';
const name = '赵明杰'
</script>

<template>
  <h1>APP组件</h1>
  <!-- 希望在父组件中指定子组件中的内容
          -可以通过插槽（slot）来是实现该需求 
    插槽入口
    <myButton>赵明杰真牛皮</myButton>
    插槽出口      
    <button>
        slot标签，会被组件的标签体所替换
        <slot></slot>
    </button>
      通过插槽引入组件，位于父组件的作用域中
    组件在哪里定义，只能接受哪里的变量-->
  <myButton>
    <A :name="name"></A>
  </myButton>
  <myWrapper>
    <!-- 具名插槽的入口 -->
    <template #h1>一级标题</template>
  </myWrapper>
</template>

<style scoped>

</style>
