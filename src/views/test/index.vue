<template>
  <div id="chart" />
</template>

<script lang="ts">
import ScoreGenerator from '../../components/ScoreGenerator/index.vue'
import SceduleGenerator from '../../components/ScheduleGenerator/index.vue'
import { defineComponent, ref } from 'vue'
import { IScoreItem, IScheduleItem } from '../../types/index'
export default defineComponent({
  components: { ScoreGenerator, SceduleGenerator },
  setup() {
    const text = ref({
      name: 'Samge',
      age: 14,
    })
    const data1 = ref<IScoreItem[]>([])
    const data2 = ref<IScheduleItem[]>([])
    return {
      data1,
      data2,
      text,
    }
  },
})
</script>
