<template>
  <a-menu :open-keys="keys.openKeys" v-model:selectedKeys="keys.selectedKeys">
    <a-menu-item key="index">竞赛管理</a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
interface Keys {
  openKeys: string[]
  selectedKeys: string[]
}
export default defineComponent({
  setup() {
    const keys = reactive<Keys>({
      openKeys: [''],
      selectedKeys: ['index'],
    })

    return {
      keys,
    }
  },
})
</script>

<style scoped></style>
