import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import rouetr from './router/index'

// 创建并挂载根实例
const app = createApp(App)
// 将路由挂载到实例上
app.use(rouetr)
app.mount('#app')
