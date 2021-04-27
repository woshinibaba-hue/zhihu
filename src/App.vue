<template>
  <div class="container">
    <Hearch :userInfo="UserInfo"></Hearch>
    <Login></Login>
    <Home></Home>
    <Floor></Floor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './view/Home/Home.vue'
import Login from './view/Login/Login.vue'
import Hearch, { UserProps } from './components/Hearch/Hearch.vue'
import Floor from './components/Floor/index.vue'
const UserInfo: UserProps = {
  isLogin: true,
  name: 'lisi'
}

export default defineComponent({
  name: 'App',
  components: { Hearch, Floor, Home, Login },
  setup() {
    return {
      UserInfo
    }
  }
})
</script>

<style lang="less">
.container {
  min-width: 720px;
  padding: 0 !important;
}
</style>
