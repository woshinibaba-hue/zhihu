<template>
  <div class="container">
    <Hearch :userInfo="userInfo"></Hearch>
    <router-view></router-view>
    <Floor></Floor>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './view/Home/Home.vue'
// import Login from './view/Login/Login.vue'
import Hearch from './components/Hearch/Hearch.vue'
import Floor from './components/Floor/index.vue'
import { useStore } from 'vuex'
import { GloballProps } from './store/store'

export default defineComponent({
  name: 'App',
  components: { Hearch, Floor },
  setup() {
    const store = useStore<GloballProps>()
    const userInfo = computed(() => store.state.user)
    return {
      userInfo
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
