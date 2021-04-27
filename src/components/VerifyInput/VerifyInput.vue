<template>
  <div>
    <input class="form-control mb-2" :class="{ 'is-invalid': InputRef.err }" :value="InputRef.val" @input="updateValue" @blur="verifyInput" v-bind="attrs" />
    <!-- 在自定义模板当中可以使用v-bind去绑定使用该自定义组件时传递过来的属性 -->
    <div v-if="InputRef.err" class="invalid-feedback">{{ InputRef.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
// 引入组件创建的侦听器
import { emitter } from '../ValidateForm/ValidateForm.vue'
import mitt from 'mitt'
interface RuleProp {
  type: 'required' | 'email' | 'password'
  message: string
}
// 类型别名
// RulesProp 类型是基于上面 RuleProp 接口的数组类型
export type RulesProp = RuleProp[]
export const removeInpt = mitt()
export default defineComponent({
  props: {
    // 接受的props参数，限定类型为 上面的  RulesProp
    rule: Array as PropType<RulesProp>,
    modelValue: String
  },
  // 简单点来说就是，该组件的prop并没有对应的属性来接受，使用该自定义组件传递过来的属性，而这些属性会默认继承到当前组件的根元素上
  inheritAttrs: false, // 不需要根组件继承 attribute
  setup(props, context) {
    // 使用自定义组件传递过来的一些表单属性，会被存放在attrs里
    // console.log(context.attrs)
    const attrs = context.attrs

    const InputRef = reactive({
      val: props.modelValue || '',
      err: false,
      message: ''
    })
    // 实现自定义组件v-model
    const updateValue = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value
      InputRef.val = targetVal
      context.emit('update:modelValue', targetVal)
    }
    // 清空表单内容
    removeInpt.on('removeInp', () => {
      InputRef.val = ''
    })
    // 验证邮箱正则表达式
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // 当表单失去焦点时触发的，用于验证表单输入是否合法
    const verifyInput = (): boolean => {
      // 判断是否存在 rule
      if (props.rule) {
        // 由于 rule 是一个数组，就可以使用数组当中的every方法，这个方法是当数组的，当数组里面每一项满足条件才会返回true，有一个不满足条件，就返回false，并且终止循环
        const allPassed = props.rule.every(item => {
          let passed = true // 用于存储判断条件结果
          InputRef.message = item.message
          switch (item.type) {
            case 'required':
              passed = InputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(InputRef.val)
              break
            case 'password':
              passed = InputRef.val.length > 6
              break
            default:
              break
          }
          return passed
        })
        // 由于不满足条件 every 这个方法始终会返回 false 所以需要对该结果进行取反操作
        InputRef.err = !allPassed
        return allPassed
      }
      return true
    }
    // 页面渲染完毕之后触发
    onMounted(() => {
      // 触发侦听器函数
      emitter.emit('form-item-created', verifyInput)
    })
    return {
      InputRef,
      verifyInput,
      updateValue,
      attrs
    }
  }
})
</script>
