<script setup>
import { ref } from 'vue'
const count = ref(0)

function clickHandler(event) {
  // 方法事件处理器中的回调函数，vue会对事件对象作为参数传递
  // 这个事件对象就是DOM中原生的事件对象，它里面包含了事件触发时的相关信息
  // 通过该对象，可以获取：出发事件的对象、出发时间按时一些情况
  // 通过该对象，也可以对事件进行一些配置：取消事件的传播、取消事件的默认行为。。。
  console.log(event);
  alert("函数执行了")
}
function clickHandler2(event) {
  // 内联事件处理器，回调函数由我们自己调用，参数也是我们自己传递的
  // 在内联事件处理，可以使用$event访问事件对象
  console.log(event);
}
function showName(text,event){
  alert(text)
  event.stopPropagation()//取消事件冒泡
  console.log(event);
}
function showName2(text){
  alert(text)
}
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <!-- 
        为元素绑定事件
          1 绑定事件使用v-on指令
            v-on:事件名
            @事件名
          2 绑定事件的两种方式
            a.内联事件处理器（自己调用函数）
                - 事件触发时，直接执行js语句
                  回调函数的参数由我们自己传递
            b.方法事件处理器（vue调用函数）
                - 事件触发时，vue会对事件的函数进行调用  
                  回调函数的参数由vue帮我们传递，参数为事件对象
            vue如何区分两种处理器：
                检查事件的值是否是合法的js标识符或属性访问路径
                  如果是，则表示为方法时间按处理器
                  否则是内联事件处理器
   -->
    <button @click="count++">点我一下</button>
    <hr>
    <!-- 方法事件处理器 -->
    <button @click="clickHandler">方法</button>
    <hr>
    <!-- 内联事件处理器 -->
    <button @click="clickHandler2($event)">内联</button>
    <hr>
    <!-- <div class="box1" @click="showName('box1',$event)">
      box1
      <div class="box2" @click="showName('box2',$event)">
        box2
        <div class="box3" @click="showName('box3',$event)">
          box3
        </div>
      </div>
    </div> -->
    <div class="box1" @click.stop="showName2('box1')">
      box1
      <div class="box2" @click.stop="showName2('box2')">
        box2
        <div class="box3" @click.stop="showName2('box3')">
          box3
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa;
}

.box2 {
  height: 100px;
  width: 100px;
  background-color: blue;
}

.box3 {
  height: 50px;
  width: 50px;
  background-color: red;
}
</style>
