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

export default defineComponent({
  components: {
    ColumnList
  },
  setup() {
    const list = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3,
        avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg',
        title: '1111',
        description: '555555'
      },
      {
        id: 4
      },
      {
        id: 5
      },
      {
        id: 6
      }
    ]
    return {
      list
    }
  }
})
</script>
