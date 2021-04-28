<template>
  <div v-if="listItem.length">
    <div class="w-auto h-50 card p-2 mb-4" v-for="item in listItem" :key="item.id">
      <h4 class="pb-md-3">{{ item.title }}</h4>
      <div class="row">
        <div class="img col-3" v-if="item.image">
          <img :src="item.image" alt="" class="rounded-lg w-100" />
        </div>
        <div class="col-9">
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
      <span class="text-muted">{{ item.createAt }}</span>
    </div>
  </div>
  <div v-else>
    <h1>暂无更多内容！！！</h1>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GloballProps } from '../../store/store'

export default defineComponent({
  props: {
    columId: {
      type: Number
    }
  },
  setup(props) {
    const store = useStore<GloballProps>()
    const lists = computed(() => store.state.ColumDetails).value
    const listItem = lists.filter(item => (item.columId === props.columId ? item : ''))
    console.log(listItem)
    return {
      listItem
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
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
