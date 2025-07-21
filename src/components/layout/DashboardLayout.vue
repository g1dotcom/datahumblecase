<template>
  <div class="flex h-screen bg-gray-50">
    <div class="hidden md:flex lg:w-64 md:w-16 bg-white shadow-lg flex-shrink-0 flex-col transition-all duration-300">
      <div class="flex items-center h-16 lg:px-4 md:px-2 border-b border-gray-200">
        <div class="flex items-center lg:justify-start md:justify-center w-full">
          <div class="text-blue-600 lg:text-xl md:text-lg font-bold lg:block md:hidden">DataHumble</div>
          <div class="text-blue-600 text-2xl font-bold lg:hidden md:block">D</div>
        </div>
      </div>
      
      <nav class="mt-8 flex flex-col flex-1">
        <div class="lg:px-4 md:px-2 flex-1">
          <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 lg:block md:hidden">
            OVERVIEW
          </div>
          <ul class="space-y-1">
            <li>
              <a href="#" class="bg-blue-50 text-blue-700 group flex items-center lg:px-2 md:px-2 lg:justify-start md:justify-center py-2 text-sm font-medium rounded-md" title="Dashboard">
                <svg class="text-blue-500 lg:mr-3 md:mr-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
                <span class="lg:inline md:hidden">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center lg:px-2 md:px-2 lg:justify-start md:justify-center py-2 text-sm font-medium rounded-md" title="Inbox">
                <svg class="text-gray-400 lg:mr-3 md:mr-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                </svg>
                <span class="lg:inline md:hidden">Inbox</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div class="lg:px-4 md:px-2 mb-8 mt-auto">
          <div class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 lg:block md:hidden">
            SETTINGS
          </div>
          <ul class="space-y-1">
            <li>
              <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center lg:px-2 md:px-2 lg:justify-start md:justify-center py-2 text-sm font-medium rounded-md" title="Settings">
                <svg class="text-gray-400 lg:mr-3 md:mr-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>
                <span class="lg:inline md:hidden">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-red-600 hover:bg-red-50 group flex items-center lg:px-2 md:px-2 lg:justify-start md:justify-center py-2 text-sm font-medium rounded-md" title="Logout">
                <svg class="text-red-500 lg:mr-3 md:mr-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                </svg>
                <span class="lg:inline md:hidden">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
        <div class="flex items-center justify-between h-16 px-4 md:px-8">
          <div class="flex items-center space-x-4 md:hidden">
            <HamburgerMenu />
            <div class="text-blue-600 text-xl font-bold">DataHumble</div>
          </div>
          
          <div class="hidden md:flex items-center space-x-4">
            <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
            <input 
              type="text" 
              placeholder="Search..." 
              class="border-0 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0"
            >
          </div>
          
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-400 hover:text-gray-500">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-500">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <div class="flex items-center space-x-2">
              <img 
                class="h-8 w-8 rounded-full" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Russell"
              >
              <span class="text-sm font-medium text-gray-900">Gökhan</span>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { HamburgerMenu } from '../mobile-menu'
</script>
