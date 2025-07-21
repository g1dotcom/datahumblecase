<template>
  <div class="md:hidden">
    <button
      @click="toggleMenu"
      class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      :class="{ 'bg-gray-100': isOpen }"
    >
      <span class="sr-only">Ana menüyü aç</span>
      <svg
        class="h-6 w-6 transition-transform duration-200"
        :class="{ 'rotate-90': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="fixed inset-0 flex z-40"
      @click="closeMenu"
    >
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>

      <div
        class="relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition ease-in-out duration-300"
        @click.stop
      >
        <div class="absolute top-4 right-4 z-10">
          <button
            @click="closeMenu"
            class="flex items-center justify-center h-8 w-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span class="sr-only">Sidebar'ı kapat</span>
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <div class="text-blue-600 text-xl font-bold">DataHumble</div>
          </div>
          
          <nav class="mt-8">
            <div class="px-4">
              <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                OVERVIEW
              </div>
              <ul class="space-y-1">
                <li>
                  <a
                    href="#"
                    @click="closeMenu"
                    class="bg-blue-50 text-blue-700 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <svg class="text-blue-500 mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click="closeMenu"
                    class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <svg class="text-gray-400 mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                    </svg>
                    Inbox
                  </a>
                </li>
              </ul>
            </div>
            
            <div class="px-4 mt-8">
              <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                SETTINGS
              </div>
              <ul class="space-y-1">
                <li>
                  <a
                    href="#"
                    @click="closeMenu"
                    class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <svg class="text-gray-400 mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                    </svg>
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click="closeMenu"
                    class="text-red-600 hover:bg-red-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  >
                    <svg class="text-red-500 mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleEscape)
}
</script>
