<script>
export default {
  //data用来指定实例对象中的响应式属性
  data() {
    return {
      stu: {
        name: "孙悟空",
        age: 18,
        gender: "男"
      },
      firsName:"悟空",
      lastName:"孙",
      arr:["孙悟空","猪八戒","沙和尚"]
    }
  },
  methods: {
    changeage() {
      if (this.stu.age === 18) {
        this.stu.age--
      } else {
        this.stu.age++
      }
    },
    // methods中的方法每次组件重新渲染都会调用
    getInfo(){
      console.log("methods");
      return this.stu.age >= 18 ? "你已经成年了!!!" : "你还是未成年!!!"
    }
  },
  // computed用来指定计算属性
  // {属性名:getter}
  //计算属性,只在其以来的数据发生变化时才会重新执行
  //         会对数据进行缓存
  computed: {
    info() {
      // 在计算属性的getter中,尽量只做读取相关的逻辑
      // 不要执行哪些会产生作用的代码,不要修改
      console.log("computed");
      return this.stu.age >= 18 ? "你已经成年了" : "你还是未成年"
    },
    // 就算属性的简写(只有getter时)
    // name(){
    //   return this.lastName + this.firsName
    // }
    // 可以为计算属性设置setter,使得计算属性可写,不建议
    name:{
      get(){
        return this.lastName + this.firsName
      },
      set(value){
        // 在计算属性修改时调用
        console.log(value);
        this.lastName = value[0]
        this.firsName = value.slice(1)
      }
    }
  },
}
</script>
<template>
  <div>
    <h1>{{ stu.name }}--{{ stu.age }}--{{ stu.gender }}</h1>
    <h2>评语:{{ info }}</h2>
    <h2>评语:{{ getInfo() }}</h2>
    <button @click="changeage">减龄按钮</button>
    <h3>{{firsName}}---{{lastName}}---{{name}}</h3>
    <h1>{{arr[0]}}---{{arr[1]}}---{{arr[2]}}</h1>
  </div>
</template>
    