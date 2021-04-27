<template>
  <li class="dropdown-item" :class="{ isDisable: disable }">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="less">
.dropdown-item.isDisable {
  pointer-events: none;
  color: #bebebe !important;
  background-color: transparent;
}
</style>
