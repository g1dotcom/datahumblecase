<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <StatCard 
      :value="formatPrice(gameData.price)"
      label="Price"
      icon="price"
      bgColor="blue"
    />

    <StatCard 
      :value="formatNumber(gameData.downloads)"
      label="Downloads"
      icon="download"
      bgColor="purple"
    />

    <StatCard 
      :value="formatNumber(gameData.revenue)"
      label="Revenue"
      icon="revenue"
      bgColor="pink"
    />
  </div>
</template>

<script setup>
import { StatCard } from '../ui'

const props = defineProps({
  gameData: {
    type: Object,
    default: () => ({})
  }
})

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

const formatPrice = (price) => {
  return `$${price?.toFixed(2) || '0.00'}`
}
</script>
