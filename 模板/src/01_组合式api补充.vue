<script setup>
import {ref,reactive,computed} from "vue"
let msg =ref( "hello vue")
//{value:obj}
// obj.value.name
const obj = ref({
    name:"孙悟空",
    age:18
})

// obj2.name.value
const obj2 = {
    name:ref("孙悟空"),
    age:ref(18)
}
const {name,age} = obj2
function fn(){
    // 修改ref对象时，必须通过value
    msg.value = "哈哈"
}

// computed 用来生成计算属性
const newMsg = computed(()=>{
    return msg.value+"-我爱vue"
})
</script>
<template>
    <!-- ref对象在模板中可以自动化那个解包（要求ref对象必须时顶层对象） -->
    <div>
        <h1>{{msg}}</h1>
        <h1>{{newMsg}}</h1>
        <h2>{{obj.age+1}}</h2>
        <h2>{{age+1}}</h2>
        <button @click="fn">点我一下</button>
    </div>
</template>