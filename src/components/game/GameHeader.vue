<template>
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ gameData.name }}</h1>
    <StatsCards :game-data="gameData" />
  </div>
</template>

<script setup>
import { StatsCards } from '../dashboard'

const props = defineProps({
  gameData: {
    type: Object,
    default: () => ({})
  }
})
</script>
