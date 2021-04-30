<template>
  <h4 class="fw-bolder fs-4">新建文章</h4>
  <ValidateForm @validate-form="publish">
    <div class="mb-3 p-2">
      <span class="form-label fw-bolder fs-6">文章标题:</span>
      <VerifyInput v-model="propsText.titleRef" :rule="titleRules" placeholder="请输入文章标题"></VerifyInput>
    </div>
    <div class="mb-3 p-2">
      <span class="form-label fw-bolder fs-6">文章详情:</span>
      <VerifyInput v-model="propsText.detail" :rule="detailRules" placeholder="请输入文章详情" tagType="textarea"></VerifyInput>
    </div>
    <template #submit>
      <button class="btn btn-primary">发布文章</button>
    </template>
  </ValidateForm>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VerifyInput, { RulesProp } from '../../components/VerifyInput/VerifyInput.vue'
import ValidateForm from '../../components/ValidateForm/ValidateForm.vue'
import { useStore } from 'vuex'
import { GloballProps, ColumDetails } from '../../store/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    VerifyInput,
    ValidateForm
  },
  setup() {
    const store = useStore<GloballProps>()
    const router = useRouter()
    const propsText = reactive({
      titleRef: '',
      detail: ''
    })
    // 标题验证消息
    const titleRules: RulesProp = [
      {
        type: 'required',
        message: '标题不能为空！！！'
      }
    ]
    // 文章内容验证消息
    const detailRules: RulesProp = [
      {
        type: 'required',
        message: '文章详情内容不能为空！！！'
      }
    ]
    const publish = (result: boolean) => {
      // 当表单验证通过时触发
      if (result) {
        const { columId } = store.state.user
        if (columId) {
          const newProp: ColumDetails = {
            id: new Date().getTime(),
            title: propsText.titleRef,
            content: propsText.detail,
            createAt: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            columId
          }
          store.commit('publish', newProp)
        }
        router.push(`/columndetail/${columId}`)
      }
    }
    return {
      propsText,
      publish,
      titleRules,
      detailRules
    }
  }
})
</script>

<style lang="less" scoped>
.btn {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
