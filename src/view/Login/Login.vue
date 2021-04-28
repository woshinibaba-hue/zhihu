<template>
  <ValidateForm @validate-form="onFromValidate">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">用户名</label>
      <VerifyInput ref="InputRef" :rule="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text"></VerifyInput>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <VerifyInput placeholder="请输入密码" type="password" :rule="pwdRules" v-model="pwdVal"></VerifyInput>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" />
      <label class="form-check-label" for="exampleCheck1">记住密码</label>
    </div>
    <!-- 使用具名插槽方式 -->
    <!-- 完整写法  v-slot:submit    语法糖写法  #submit -->
    <template #submit></template>
  </ValidateForm>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '../../components/ValidateForm/ValidateForm.vue'
import VerifyInput, { RulesProp, removeInpt } from '../../components/VerifyInput/VerifyInput.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  components: { ValidateForm, VerifyInput },
  setup() {
    const InputRef = ref()
    const router = useRouter()
    const store = useStore()
    // 自定义组件绑定的v-model
    // eslint-disable-next-line prefer-const
    let emailVal = ref('111@11.cn')
    // eslint-disable-next-line prefer-const
    let pwdVal = ref('!Adeash121')
    // 向表单组件传递的邮箱验证提示props
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '用户名不能为空！！！'
      },
      {
        type: 'email',
        message: '邮箱格式不正确！！！'
      }
    ]
    // 向自定义表单组件传递的密码提示props
    const pwdRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空！！！'
      },
      {
        type: 'password',
        message: '密码长度不能少于6位！！！'
      }
    ]
    // 监听表单验证子组件的自定义事件
    const onFromValidate = (result: boolean) => {
      console.log(InputRef.value.verifyInput())
      console.log('点击了登录', result)
      // 判断表单内容是否合法，如果合法就清空表单内容，否则不执行
      if (result) {
        // 当点击按钮之后，触发该自定义函数，用于清除表单内容
        removeInpt.emit('removeInp')
        router.push('/')
        store.commit('login')
      }
    }
    return {
      emailRules,
      emailVal,
      pwdRules,
      onFromValidate,
      InputRef,
      pwdVal
    }
  }
})
</script>
