import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/store'

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
    component: Login,
    meta: { redirectAlreadyLogin: true }
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
    component: CreateProp,
    // ! 添加路由元信息，对象形式  一般用于在导航守卫当中，通过该属性来控制该路由
    meta: { requiredLogin: true }
  }
]

// 创建路由对象
const router = createRouter({
  // createWebHashHistory()  创建 hash 模式
  history: createWebHashHistory(),
  routes
})

// 创建全局前置导航守卫
router.beforeEach((to, from, next) => {
  // // to,就是即将要前往的路由地址
  // console.log('to', to)
  // // from，就是即将要离开的路由地址
  // console.log('from', from)
  // // next，下一步，next必须手动调用一次，否则，将无法继续往下执行
  // next()
  // 通过设置的路由元信息来进行控制
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (store.state.user.isLogin && to.meta.redirectAlreadyLogin) {
    next({ name: '/' })
  } else {
    next()
  }
})

// 导出路由对象
export default router
