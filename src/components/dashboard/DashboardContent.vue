<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
    <div class="xl:col-span-2 space-y-6">
      <PerformanceChart :performance-data="performanceData" />
      
      <DescriptionCard
        title="Description"
        :content="gameData.description"
      />
    </div>

    <div class="xl:col-span-1">
      <StreamPerformance :stream-data="streamData" />
      
      <div class="mt-6">
        <DescriptionCard 
          title="Short Description"
          :content="shortDescription"
          :is-short="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import StreamPerformance from '../charts/StreamPerformance.vue'
import DescriptionCard from '../ui/DescriptionCard.vue'
import PerformanceChart from '../charts/PerformanceChart.vue'


const props = defineProps({
  gameData: {
    type: Object,
    default: () => ({})
  },
  performanceData: {
    type: Object,
    default: () => ({})
  },
  streamData: {
    type: Object,
    default: () => ({})
  }
})

const shortDescription = computed(() => {
  return props.gameData.description?.substring(0, 200) + '...' || ''
})
</script>
