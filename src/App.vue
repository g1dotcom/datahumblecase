<script setup>
import { ref, onMounted } from 'vue'
import { 
  DashboardLayout,
  GameHeader,
  DashboardContent,
  LoadingSpinner 
} from './components'
import GameAPI from './services/api.js'

const gameData = ref({})
const performanceData = ref({})
const streamData = ref({})
const loading = ref(true)

const loadData = async () => {
  try {
    loading.value = true
    
    const [overview, performance, stream] = await Promise.all([
      GameAPI.getOverview(),
      GameAPI.getPerformance(),
      GameAPI.getStreamData()
    ])
    
    gameData.value = overview
    performanceData.value = performance
    streamData.value = stream
    
  } catch (error) {
    console.error('Error loading data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <DashboardLayout>
    <LoadingSpinner v-if="loading" />
    
    <div v-else>
      <GameHeader :game-data="gameData" />
      
      <DashboardContent 
        :game-data="gameData"
        :performance-data="performanceData"
        :stream-data="streamData"
      />
      />
    </div>
  </DashboardLayout>
</template>
