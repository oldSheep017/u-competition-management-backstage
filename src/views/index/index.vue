<template>
  <div class="w-full h-auto bg-white py-6">
    <header
      class="h-16 flex justify-end items-center box-border px-10 bg-white"
    >
      <a-button type="primary" size="large" @click="goCreate">
        <div class="w-full h-full flex justify-center items-center">
          <PlusOutlined />
          创建比赛
        </div>
      </a-button>
    </header>
    <main class="box-border px-8">
      <a-divider orientation="left">我创建的比赛</a-divider>
      <div
        class="relative w-full h-32 bg-white border shadow-lg my-8 rounded-sm box-border p-5 flex items-center"
      >
        <div class="w-24 h-24 rounded-md shadow-lg bg-white">
          <img
            src="https://joeschmoe.io/api/v1/random"
            class="w-full h-full"
            alt="competition cover"
          />
        </div>

        <div class="h-full mx-4 flex p-3 flex-col">
          <h1 class="text-lg flex items-center">
            <span class="mr-3">海南医学院植树大赛</span>
            <a-tag color="blue">作品赛</a-tag>
            <a-tag color="green">进行中</a-tag>
          </h1>
          <h1 class="text-sm text-gray-500">2022/05/01-2022/05/12</h1>
        </div>

        <!-- 折叠图标 -->
        <div class="absolute right-6 top-4"><DownOutlined /></div>

        <!-- 脚步 -->
      </div>

      <a-list item-layout="horizontal" :data-source="data" size="large">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <template #title>
                <a href="https://www.antdv.com/">{{ item.title }}</a>
              </template>
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { PlusOutlined, DownOutlined, UpOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

interface DataItem {
  title: string
}

const router = useRouter()

const goCreate = () => {
  router.push({ name: 'Create' })
}

const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
]
</script>

<style scoped></style>
