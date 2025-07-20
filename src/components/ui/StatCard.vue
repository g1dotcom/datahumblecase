<template>
  <div :class="cardClasses">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <div :class="iconContainerClasses">
          <svg v-if="icon === 'price'" :class="iconClasses" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
          
          <svg v-else-if="icon === 'download'" :class="iconClasses" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
          </svg>
          
          <svg v-else-if="icon === 'revenue'" :class="iconClasses" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        </div>
      </div>
      <div class="ml-4">
        <div class="text-2xl font-bold text-gray-900">{{ value }}</div>
        <div class="text-sm text-gray-500">{{ label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'blue'
  }
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-lg p-6'
  const colorClasses = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    pink: 'bg-pink-50'
  }
  return `${baseClasses} ${colorClasses[props.bgColor]}`
})

const iconContainerClasses = computed(() => {
  const baseClasses = 'w-12 h-12 rounded-lg flex items-center justify-center'
  const colorClasses = {
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    pink: 'bg-pink-100'
  }
  return `${baseClasses} ${colorClasses[props.bgColor]}`
})

const iconClasses = computed(() => {
  const colorClasses = {
    blue: 'w-6 h-6 text-blue-600',
    purple: 'w-6 h-6 text-purple-600',
    pink: 'w-6 h-6 text-pink-600'
  }
  return colorClasses[props.bgColor]
})
</script>
