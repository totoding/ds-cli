<template>
  <div class="w-full h-12 flex justify-between bg-white items-center pr-2 border-b-[1px]">
    <div
      class="flex justify-center items-center h-full w-12 cursor-pointer hover:bg-slate-100 pb-1"
      @click="handleCollapseClick"
    >
      <menu-unfold-outlined v-if="sideCollapsed" class="trigger text-xl font-bold" />
      <menu-fold-outlined v-else class="trigger text-xl font-bold" />
    </div>
    <div class="header-info">123</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useSystemStore } from '@/stores/modules/system/index'

const systemStore = useSystemStore()

const sideCollapsed = computed(() => systemStore.sideCollapsed)

const handleCollapseClick = () => {
  systemStore.toggleSideCollapsed()
}
</script>
<style scoped lang="scss"></style>
