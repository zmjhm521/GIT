import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// app.config.globalProperties.hello="你好我是全局的变量"
// app.config.globalProperties.alert=alert.bind(this)


app.mount('#app')
