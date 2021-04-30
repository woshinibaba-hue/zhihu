import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../view/Home/Home.vue')
const Login = () => import('../view/Login/Login.vue')
const Column = () => import('../view/Column/Column.vue')
const ColumnDetail = () => import('../view/ColumDetail/ColumDetail.vue')
const CreateProp = () => import('../view/CreateProp/CreateProp.vue')

// 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    // !动态路由, name 属性值，是动态路由匹配的 name
    path: '/columndetail/:id',
    name: 'ColumnDetail',
    component: ColumnDetail
  },
  {
    path: '/create',
    name: 'CreateProp',
    component: CreateProp
  }
]

// 创建路由对象
const router = createRouter({
  // createWebHashHistory()  创建 hash 模式
  history: createWebHashHistory(),
  routes
})

// 导出路由对象
export default router
