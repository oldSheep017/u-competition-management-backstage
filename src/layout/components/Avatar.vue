<template>
  <a-dropdown placement="bottomRight">
    <div class="mx-8">
      <a-avatar shape="square" size="large">
        <template #icon>
          <div class="w-full h-full grid place-items-center">
            <UserOutlined />
          </div>
        </template>
      </a-avatar>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>首页</a-menu-item>
        <a-menu-item>组织信息</a-menu-item>
        <a-menu-item>退出登录</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: { UserOutlined },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
