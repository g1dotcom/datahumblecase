<template>
  <div class="space-y-6">
    <div class="bg-green-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Stream Performance</h3>
      
      <div class="h-48 mb-6">
        <canvas ref="barChartCanvas"></canvas>
      </div>

      <div class="bg-white rounded-lg p-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-4">Stream Stats</h4>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 mb-1">Hours Watched</p>
            <div class="flex items-baseline space-x-2">
              <span class="text-3xl font-bold text-gray-900">
                {{ formatNumber(streamData.hoursWatched?.value) }}
              </span>
              <div class="flex items-center">
                <svg 
                  :class="streamData.hoursWatched?.delta >= 0 ? 'text-green-500' : 'text-red-500'"
                  class="w-4 h-4 mr-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    v-if="streamData.hoursWatched?.delta >= 0"
                    fill-rule="evenodd" 
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" 
                    clip-rule="evenodd" 
                  />
                  <path 
                    v-else
                    fill-rule="evenodd" 
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" 
                    clip-rule="evenodd" 
                  />
                </svg>
                <span 
                  :class="streamData.hoursWatched?.delta >= 0 ? 'text-green-500' : 'text-red-500'"
                  class="text-sm font-medium"
                >
                  {{ formatNumber(Math.abs(streamData.hoursWatched?.delta || 0)) }} 
                  ({{ Math.abs(streamData.hoursWatched?.deltaPercentage || 0) }}%)
                </span>
              </div>
            </div>
          </div>

          <div>
            <p class="text-sm text-gray-500 mb-1">Average Viewers</p>
            <div class="flex items-baseline space-x-2">
              <span class="text-3xl font-bold text-gray-900">
                {{ formatNumber(streamData.averageViewers?.value) }}
              </span>
              <div class="flex items-center">
                <svg 
                  :class="streamData.averageViewers?.delta >= 0 ? 'text-green-500' : 'text-red-500'"
                  class="w-4 h-4 mr-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    v-if="streamData.averageViewers?.delta >= 0"
                    fill-rule="evenodd" 
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" 
                    clip-rule="evenodd" 
                  />
                  <path 
                    v-else
                    fill-rule="evenodd" 
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" 
                    clip-rule="evenodd" 
                  />
                </svg>
                <span 
                  :class="streamData.averageViewers?.delta >= 0 ? 'text-green-500' : 'text-red-500'"
                  class="text-sm font-medium"
                >
                  {{ formatNumber(Math.abs(streamData.averageViewers?.delta || 0)) }} 
                  ({{ Math.abs(streamData.averageViewers?.deltaPercentage || 0) }}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  streamData: {
    type: Object,
    default: () => ({})
  }
})

const barChartCanvas = ref(null)
let barChartInstance = null

const formatNumber = (num) => {
  if (!num) return '0'
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

const createBarChart = () => {
  if (!barChartCanvas.value || !props.streamData.dailyStreamCounts) return

  const ctx = barChartCanvas.value.getContext('2d')
  
  if (barChartInstance) {
    barChartInstance.destroy()
  }

  const dailyData = props.streamData.dailyStreamCounts
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const values = days.map(day => dailyData[day] || 0)

  barChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dayLabels,
      datasets: [{
        data: values,
        backgroundColor: '#3B82F6',
        borderRadius: 4,
        maxBarThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          border: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          max: 5,
          ticks: {
            stepSize: 1
          },
          grid: {
            color: '#F3F4F6'
          },
          border: {
            display: false
          }
        }
      }
    }
  })
}

onMounted(async () => {
  await nextTick()
  createBarChart()
})

import { watch } from 'vue'
watch(() => props.streamData, () => {
  nextTick(() => {
    createBarChart()
  })
}, { deep: true })
</script>
