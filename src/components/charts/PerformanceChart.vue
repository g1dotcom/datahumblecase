<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-semibold text-gray-900">Performance</h3>
      <select 
        v-model="selectedPeriod"
        class="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700"
      >
        <option value="01 - 07 May">01 - 07 May</option>
        <option value="08 - 15 May">08 - 15 May</option>
        <option value="16 - 23 May">16 - 23 May</option>
      </select>
    </div>
    
    <div class="h-64">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  performanceData: {
    type: Object,
    default: () => ({})
  }
})

const chartCanvas = ref(null)
const selectedPeriod = ref('01 - 07 May')
let chartInstance = null

const createChart = () => {
  if (!chartCanvas.value || !props.performanceData.dates) return

  const ctx = chartCanvas.value.getContext('2d')
  
  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: props.performanceData.dates?.map(date => {
        const d = new Date(date)
        return d.getDate().toString().padStart(2, '0')
      }) || [],
      datasets: [
        {
          label: 'Watch Time',
          data: props.performanceData.watchTime || [],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#3B82F6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2
        },
        {
          label: 'Engagement',
          data: props.performanceData.engagement || [],
          borderColor: '#F59E0B',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#F59E0B',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2
        }
      ]
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
          max: 12,
          ticks: {
            stepSize: 2,
            callback: function(value) {
              return value + 'h'
            }
          },
          grid: {
            color: '#F3F4F6'
          },
          border: {
            display: false
          }
        }
      },
      elements: {
        point: {
          hoverRadius: 6
        }
      }
    }
  })
}

onMounted(async () => {
  await nextTick()
  createChart()
})

import { watch } from 'vue'
watch(() => props.performanceData, () => {
  nextTick(() => {
    createChart()
  })
}, { deep: true })
</script>
