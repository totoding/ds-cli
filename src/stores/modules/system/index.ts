import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', () => {
  const sideCollapsed = ref(false)
  function toggleSideCollapsed() {
    sideCollapsed.value = !sideCollapsed.value
  }
  return { sideCollapsed, toggleSideCollapsed }
})
