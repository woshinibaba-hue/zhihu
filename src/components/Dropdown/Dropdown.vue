<template>
  <div class="dropdown">
    <button class="btn btn-outline-light dropdown-toggle" ref="dropdownRef" type="button" @click="toggleOpen">{{ title }}</button>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onUnmounted, onMounted } from 'vue'
// 引入自定义hooks函数
import useClickOutside from '../../hooks/useClickOutside'

export default defineComponent({
  props: {
    // 登录成功之后，按钮显示的内容
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    // 此 ref 对象保存的就是 dom 元素上的 ref 所绑定的 dom 元素节点
    const dropdownRef = ref<null | HTMLElement>(null)
    // 控制下拉菜单状态
    // false 收齐   true 展开
    const isOpen = ref(false)
    // 点击展开或者收齐下拉菜单
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // const isClickOutside = useClickOutside(dropdownRef)

    // 由于此处函数只会执行一次，那么需要使用watch进行监听
    // watch(isClickOutside, () => {
    //   if (isOpen.value && isClickOutside) {
    //     isOpen.value = false
    //   }
    // })

    // 当组件挂载完毕时触发
    onMounted(() => {
      document.addEventListener('click', handle)
    })
    // 当组件销毁时触发
    onUnmounted(() => {
      document.removeEventListener('click', handle)
    })
    // 绑定的点击事件，用于在 dropdown 外部点击任意位置，关闭下拉菜单
    const handle = (e: MouseEvent) => {
      if (dropdownRef.value) {
        // e.target 由于这个可能不是dom节点，需要使用类型断言
        // dropdownRef.value.contains(e.target as HTMLElement)
        // 判断  dropdownRef 这个节点上是否包含 当前点击的 dom 节点
        if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
          isOpen.value = false
        }
      }
    }
    return {
      isOpen,
      toggleOpen,
      // 这个 ref 对象，保存的就是 ref 属性绑定的 dom 节点元素
      // 注意点：这个 ref 对象的名称，必须与 dom 节点上的ref属性名一样，才可以
      dropdownRef
    }
  }
})
</script>
