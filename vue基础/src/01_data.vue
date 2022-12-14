<script>
import MyButton from '../components/MyButton.vue';
import {shallowReactive} from "vue"
export default{
  data() {
    // data返回的对象最终会被Vue所代理
    // 建议将哪些暂时没有使用到的属性,也添加到data返回的对象中,值可以设置为null
    return {
      msg:"我爱vue",
      // 深层响应式对象
      stu:{
        name:"孙悟空",
        age:18,
        gender:"男",
        address:"花果山"
      }
    }
    // 某些场景下通过shallowReactive创建浅层响应式对象
    // return shallowReactive({
    //   msg:"vue爱我",
    //   // 深层响应式对象
    //   stu:{
    //     name:"孙悟空",
    //     age:18,
    //     gender:"男",
    //     address:"花果山"
    // }
    // })
  },
  components:{
    MyButton
  }
}
</script>
<template>
  <div>
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    <h2>{{stu.name}}--{{stu.age}}--{{stu.gender}}</h2>
  </div>
</template>