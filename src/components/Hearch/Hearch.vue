<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" @click="toPath('/')">纸糊专栏</a>
    <ul v-if="!userInfo.isLogin" class="nav justify-content-end">
      <li class="list-inline-item">
        <a class="btn btn-outline-light" @click="toPath('/login')">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light" href="#">注册</a>
      </li>
    </ul>
    <ul v-else class="nav justify-content-end">
      <li class="nav-item">
        <Dropdown :title="`你好 ${userInfo.name}`">
          <dropdown-item> <a href="javascript:;" class="dropdown-item">新建文章</a> </dropdown-item>
          <dropdown-item> <a href="javascript:;" class="dropdown-item">编辑资料</a> </dropdown-item>
          <dropdown-item> <a href="javascript:;" class="dropdown-item">退出登录</a> </dropdown-item>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from '../Dropdown/Dropdown.vue'
import DropdownItem from '../DropdownItem/DropdownItem.vue'
import { useRouter } from 'vue-router'

// * 定义传递过来的 props 接口
export interface UserProps {
  isLogin: boolean
  id?: number
  name?: string
}
export default defineComponent({
  components: { Dropdown, DropdownItem },
  props: {
    userInfo: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup() {
    const router = useRouter()
    // * 利用编程式导航跳转路由
    const toPath = path => {
      router.push(path)
    }
    return {
      toPath
    }
  }
})
</script>
