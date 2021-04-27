// 用于处理，点击展开下拉框之外的 节点时，收齐下拉框
import { onMounted, ref, Ref, onUnmounted } from 'vue'

// 如果在这里类型直接给定一个 dom 元素节点，那么在 setup 当中是不会发生变化的，所以类型必须为响应式对象 Ref
export default (elementRef: Ref<null | HTMLElement>) => {
  // 声明一个 ref 对象，用于判断是否点击的是，除下拉框之外的节点
  const isClickOutside = ref(false)
  const handle = (e: MouseEvent) => {
    // 判断 传递过来的参数是否存在 也就是dom节点是否存在
    if (elementRef.value) {
      // elementRef.value.contains(e.target as HTMLElement)
      // 判断传递过来的 dom 节点中是否 包含当前点击的 dom 节点
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  // 元素挂载完毕之后执行
  onMounted(() => {
    document.addEventListener('click', handle)
  })
  // 当组件销毁之后执行
  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })
  return isClickOutside
}
