import { createApp } from 'vue'
// 引入 App 根组件
import App from './App.vue'
// 引入 路由
import router from './router/index'
// 引入 store
import store from './store/store'

// 创建并挂载根实例
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
