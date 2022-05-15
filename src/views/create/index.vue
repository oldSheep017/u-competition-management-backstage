<template>
  <main class="box-border px-10 bg-white h-full relative">
    <div class="mb-8 p-6 box-border rounded-md">
      <a-steps :current="current">
        <a-step title="步骤一" description="填写比赛基本信息" />
        <a-step title="步骤二" description="设计比赛评分表" />
        <a-step title="提交" description="创建中, 请稍等" />
      </a-steps>
    </div>
    <section
      class="w-full h-auto flex transition-transform"
      :class="`translate-x-[${current * -100}%]`"
    >
      <div class="w-full shrink-0">
        <a-divider orientation="left">基本信息</a-divider>
        <a-form
          :model="createForm"
          layout="vertical"
          name="create"
          :wrapper-col="{ span: 24 }"
        >
          <a-row type="flex">
            <a-col :span="5">
              <a-form-item label="竞赛名称">
                <a-input v-model:value="createForm.name" />
              </a-form-item>
            </a-col>
            <a-col :span="4" :offset="1">
              <a-form-item label="竞赛范围">
                <a-select
                  ref="select"
                  v-model:value="createForm.level"
                  style="width: 160px"
                >
                  <a-select-option :value="0">面向本校</a-select-option>
                  <a-select-option :value="1">面向全部</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="2">
              <a-form-item label="是否为作品赛">
                <a-switch
                  v-model:checked="createForm.hasWork"
                  checked-children="是"
                  un-checked-children="否"
                />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <template v-if="createForm.hasWork">
                <a-form-item label="作品形式">
                  <a-select
                    ref="select"
                    v-model:value="createForm.workType"
                    style="width: 120px"
                  >
                    <a-select-option :value="0">文字</a-select-option>
                    <a-select-option :value="1">图片</a-select-option>
                    <a-select-option :value="2">视频</a-select-option>
                  </a-select>
                </a-form-item>
              </template>
            </a-col>
          </a-row>

          <a-row type="flex">
            <a-col :span="4">
              <a-form-item label="开始日期">
                <a-date-picker
                  v-model:value="createForm.startDate"
                  :disabled-date="disabledStartDate"
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="结束日期">
                <a-date-picker
                  v-model:value="createForm.endDate"
                  :disabled-date="disabledEndDate"
                />
              </a-form-item>
            </a-col>
            <a-col :span="2">
              <a-form-item label="阶段数">
                <a-input-number
                  v-model:value="createForm.stageCount"
                  size="large"
                  :min="1"
                  :max="maxStage"
                />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row type="flex">
            <a-col :span="4">
              <a-form-item label="主办方">
                <a-input v-model:value="createForm.host" disabled />
              </a-form-item>
            </a-col>
            <a-col :span="4" :offset="1">
              <a-form-item label="协办方">
                <a-select
                  v-model:value="createForm.assist"
                  mode="tags"
                  style="width: 100%"
                  placeholder="输入内容后按Enter"
                />
              </a-form-item>
            </a-col>
          </a-row>

          <a-row type="flex" class="h-auto">
            <a-col :span="8">
              <a-form-item label="赛程安排">
                <template v-for="(n, index) in createForm.stageCount">
                  <div class="flex my-4">
                    <h1 class="w-48">阶段{{ index + 1 }}范围</h1>
                    <a-range-picker
                      v-model:value="createForm.schedule[index].range"
                    />
                  </div>
                  <div class="flex">
                    <h1 class="w-48">阶段{{ index + 1 }}名称</h1>
                    <a-input
                      v-model:value="createForm.schedule[index].action"
                    />
                  </div>
                  <a-divider />
                </template>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row type="flex">
            <a-col :span="8">
              <a-form-item label="竞赛简介">
                <a-textarea
                  v-model:value="createForm.introduction"
                  placeholder="比赛基本介绍"
                  :maxlength="300"
                  show-count
                  :autoSize="true"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8" :offset="2">
              <a-form-item label="封面图片(可选)">
                <a-upload
                  v-model:file-list="createForm.cover"
                  list-type="picture"
                  :max-count="1"
                  :before-upload="beforeUpload"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                  <a-button>
                    <upload-outlined></upload-outlined>
                    Upload (Max: 1)
                  </a-button>
                </a-upload>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="w-full shrink-0">
        <a-divider orientation="left">评分表设计</a-divider>
        <score-generator v-model:sheet="createForm.scoreChart" />
      </div>
    </section>

    <div
      class="w-full h-16 flex items-center justify-center absolute right-4 bottom-14"
    >
      <a-button
        type="primary"
        size="large"
        ghost
        @click="prevStep"
        v-if="current > 0"
        >上一步</a-button
      >
      <a-button type="primary" size="large" class="mx-4">提交</a-button>
      <a-button
        type="primary"
        size="large"
        ghost
        @click="nextStep"
        v-if="current < 2"
        >下一步</a-button
      >
    </div>
  </main>
</template>

<script lang="ts" setup>
import dayjs, { Dayjs } from 'dayjs'
import { IScheduleItem } from '../../types/index'
import { reactive, ref, computed, watch } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { randomString } from '../../utils'
import ScoreGenerator from '../../components/ScoreGenerator/index.vue'

interface ScoreChart {
  id: string
  title: string
  score: number
  step: number
}

interface CreateState {
  name: string
  level: number
  startDate: string
  endDate: string
  hasWork: boolean
  workType: number
  introduction: string
  host: string
  assist: string[]
  stageCount: number
  schedule: IScheduleItem[]
  cover: UploadProps['fileList']
  scoreChart: ScoreChart[]
  code: string
}

// 控制步骤条
const current = ref(0)

const nextStep = () => {
  if (current.value === 2) {
    return
  }
  current.value++
}

const prevStep = () => {
  if (current.value === 0) {
    return
  }
  current.value--
}

// 控制阶段最大值
const maxStage = computed(() => {
  if (!createForm.endDate || !createForm.startDate) return 1
  return dayjs(createForm.endDate).diff(createForm.startDate, 'day') + 1
})

// 控制选择开始日期的不可选项
const disabledStartDate = (current: Dayjs) => {
  return current < dayjs().subtract(1, 'day').endOf('day')
}

// 控制选择结束日期的不可选项
const disabledEndDate = (current: Dayjs) => {
  // Can not select days before today and today
  if (!createForm.startDate) {
    return current < dayjs().endOf('day')
  } else {
    return current < dayjs(createForm.startDate).endOf('day')
  }
}

// 上传前钩子函数
// @ts-ignore
const beforeUpload = (file: UploadProps['fileList'][number]) => {
  console.log(file.type)
  const isJpgOrPng =
    file.type === 'image/jpeg' ||
    file.type === 'image/png' ||
    file.type === 'image/jpg'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 4
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const createForm = reactive<CreateState>({
  name: '',
  level: 0,
  startDate: '',
  endDate: '',
  hasWork: false,
  workType: 0,
  introduction: '',
  host: '海南医学院老羊',
  assist: [],
  stageCount: 1,
  schedule: [
    {
      id: randomString(5, false),
      range: [],
      action: '',
    },
  ],
  cover: [],
  scoreChart: [],
  code: '',
})

watch(
  () => createForm.stageCount,
  (current, prev) => {
    if (current > prev) {
      const newItem = { id: randomString(5, false), range: [], action: '' }
      createForm.schedule.push(newItem)
    } else {
      createForm.schedule.splice(0, 1)
    }
  }
)
</script>
