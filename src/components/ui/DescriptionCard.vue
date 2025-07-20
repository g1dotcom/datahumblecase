<template>
  <div class="bg-pink-50 rounded-lg p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ title }}</h3>
    <p :class="textClasses">{{ content }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ''
  },
  isShort: {
    type: Boolean,
    default: false
  }
})

const textClasses = computed(() => {
  return props.isShort 
    ? 'text-sm text-gray-700 leading-relaxed'
    : 'text-gray-700 leading-relaxed'
})
</script>
