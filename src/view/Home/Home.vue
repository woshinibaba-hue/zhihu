<template>
  <div class="text-center">
    <img src="../../assets/callout.svg" alt="" class="w-25" />
    <h2>
      随心写作，自由表达
    </h2>
    <button class="btn btn-primary mt-4 p-2">开始创作</button>
    <h3 class="mt-5 fw-bolder mb-4">发现精彩</h3>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList from '../../components/ColumnList/index.vue'

import { testData } from '../../testData'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const list = testData
    return {
      list
    }
  }
})
</script>
