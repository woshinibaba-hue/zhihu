<template>
  <div class="row">
    <div v-for="item in ColumList" :key="item.id" class="col-3 mb-4">
      <div class="card shadow-sm h-100 text-center">
        <div class="card-body">
          <img :src="item.avatar" :alt="item.title" class="rounded-circle border border-light w-25 my-3" />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left content">{{ item.description }}</p>
          <!-- 注意，两种都需要使用v-bind进行绑定 -->
          <!-- 动态路由传参，需要传递一个对象，name为需要跳转的name名称，params 为需要传递的参数 -->
          <!-- <router-link :to="{ name: 'column', params: { id: item.id } }" class="btn btn-outline-primary">进入专栏</router-link> -->
          <!-- 动态路由传参方式2，利用模板字符串  -->
          <router-link :to="`/columndetail/${item.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
// 定义一个接口，用于限定props参数
export interface ColumProps {
  id: number
  title: string
  avatar?: string
  description: string
}
export default defineComponent({
  props: {
    list: {
      // 因为 Array 是一个构造函数，构造函数是无法直接进行类型断言的，所以需要使用 Proptype 然后使用泛型的方式，就可以实现了
      type: Array as PropType<ColumProps[]>,
      required: true
    }
  },
  setup(props) {
    // 如果没有图片，则使用默认图片
    const ColumList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('../../assets/column.jpg')
        }
        return item
      })
    })
    return {
      ColumList
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
