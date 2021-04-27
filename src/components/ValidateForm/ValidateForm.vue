<template>
  <div class="validate-form">
    <!-- 这个 name='default 是默认的属性，可以省略' -->
    <slot name="default"></slot>
    <div class="submit" @click.prevent="submitForm">
      <slot name="submit">
        <!-- 下面是默认内容，如果没有使用上面的sumit插槽，会默认显示下面的插槽 -->
        <button type="submit" class="btn btn-primary">登录</button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt' // 导入mitt ，用于组件通讯
type ValidateFunc = () => boolean
// 创建侦听器
export const emitter = mitt()
export default defineComponent({
  // 也可以使用数组的方式，定义需要发射的自定义事件
  emits: ['validate-form'],
  setup(_, context) {
    // 用于保存验证函数
    let funcArr: ValidateFunc[] = []
    // 点击按钮时触发，并且向外发射一个自定义事件
    const submitForm = () => {
      // 使用map方法对数组每一项进行迭代，由于数组的每一项是一个函数，就可以直接调用，都返回一个布尔值
      // 在使用 every 方法对该数组进行验证，由于这是链式调用，map会返回一个新数组，那个新数组上就是每次调用函数返回的布尔值
      // every 会对布尔值进行验证，全部为true才会通过
      const result = funcArr.map(item => item()).every(item => item)
      context.emit('validate-form', result)
    }
    // 用于侦听的函数
    const callback = func => {
      // 将验证函数push到数组当中
      funcArr.push(func)
    }
    // 利用创建出来的侦听器，调用它身上的on，添加侦听
    emitter.on('form-item-created', callback)
    // 在组件销毁之后执行
    onUnmounted(() => {
      // 移除侦听
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>
<style lang="less" scoped>
.btn-primary {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
