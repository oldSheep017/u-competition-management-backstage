<template>
  <a-layout class="w-screen h-screen">
    <a-layout-header :style="styles.header">
      <Logo />
      <span class="text-lg">系统</span>
      <Avatar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="256" :style="styles.sider">
        <Menu />
      </a-layout-sider>
      <a-layout-content :style="styles.content">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer class="font-bold flex justify-center items-center" :style="styles.footer"
      >Developed by Young youngcoding@163.com</a-layout-footer
    >
  </a-layout>
</template>

<script setup lang="ts">
import { Menu, Avatar, Logo } from './components/index'
import { reactive } from 'vue'
const styles = reactive({
  layout: {},
  sider: {
    boxSizing: 'border-box',
    backgroundColor: '#ddd',
    borderRight: '1px solid #ddd',
  },
  content: {
    overflowY: 'scroll',
  },
  header: {
    backgroundColor: '#fff',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0',
    boxSizing: 'border-box',
    borderBottom: '1px solid #ddd',
  },
  footer: {
    fontSize: '16px',
    backgroundColor: '#fff',
    height: '48px'
  },
})
</script>

<style scoped></style>
