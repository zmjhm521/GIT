import { createApp } from 'vue'
import App from './App.vue'

// App.vue是根组件有且只有一个
// createApp(App)将根组件关联到应用上
// mount()将应用挂载到页面中
// 会返回一个根组件的实例，通常命名为vm
// 组件实例是一个proxy对象（代理对象）
 
const vm =createApp(App).mount('#app')
window.vm = vm
console.log(vm);
