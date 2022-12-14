<script>
import { reactive } from "vue"
export default {
  // setup是一个钩子函数,可以通过这个函数向外部暴露组件的配置
  setup(props) {
    // 定义变量
    // 在组合式api中直接声明的变量,就是一个普通的变量,不是响应式属性
    // 修改这些属性时,不会在视图中产生效果
    const msg = "今天天气真不错"
    let count = 0

    // 可以通过reactive()来创建一个响应式对象
    const stu = reactive({
      name:"孙悟空",
      age:18,
      gender:"男"
    })
    function changeage(){
      stu.age = 100
    }
    // 在setup()中可以通过返回值来指定那些内容要暴露给外部
    // 暴露后的内容,可以在模板中直接使用
    return {
      msg,
      count,
      stu,
      changeage
    }
  }

}
</script>
<template>
  <div>
    <button @click="changeage">点我一下</button>
    <h1>点击次数{{ count }}</h1>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h2>
  </div>
</template>
    