<template>
  <pre>{{ router }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// ! useRouter  创建路由实例，  query 地址栏携带的参数，params 是动态路由携带的参数
// ! useRoute   返回路由位置
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    // 创建一个路由实例
    const router = useRouter()
    return {
      router
    }
  }
})
</script>
