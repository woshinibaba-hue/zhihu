<template>
  <div class="w-75 m-auto">
    <div class="row mb-4 align-items-center border-bottom">
      <div class="col-3 p-4">
        <img :src="testItem.avatar" alt="" class="w-50 rounded-circle" />
      </div>
      <div class="col-9">
        <h4>{{ testItem.title }}</h4>
        <p>{{ testItem.description }}</p>
      </div>
    </div>
    <PropList :columId="testItem.id"></PropList>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import PropList from '../../components/PropList/PropList.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PropList
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const id = route.params.id as string
    const testItem = store.getters.getColum(parseInt(id))
    return {
      id,
      testItem
    }
  }
})
</script>
