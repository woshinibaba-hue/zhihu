<template>
  <div class="text-center">
    <img src="../../assets/callout.svg" alt="" class="w-25" />
    <h2>随心写作，自由表达</h2>
    <button class="btn btn-primary mt-4 p-2">开始创作</button>
    <h3 class="mt-5 fw-bolder mb-4">发现精彩</h3>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ColumnList from '../../components/ColumnList/index.vue'
import { GloballProps } from '../../store/store'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup() {
    const store = useStore<GloballProps>()
    const list = computed(() => store.state.columns)
    return {
      list
    }
  }
})
</script>
