<template>
  <a-layout-sider :trigger="null" v-model:collapsed="sideCollapsed" collapsible width="220">
    <div class="h-12 text-red-50 w-full flex justify-center">
      <h1 v-show="showLogo" class="title text-lg h-full flex items-center justify-center m-0">
        ds
      </h1>
      <h1 v-show="showLogoTitle" class="title text-lg h-full flex items-center justify-center m-0">
        XXXX系统
      </h1>
    </div>
    <div style="height: calc(100vh - 3rem)" class="side overflow-y-auto scroll-bar py-3">
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" ref="menu">
        <a-menu-item key="1">
          <div class="flex items-center">
            <pie-chart-outlined />
            <span>Option 1</span>
          </div>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">TomTomTomTomTomTomTomTomTomTomTomTomTomTomTomTom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="10">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="92">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="93">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="94">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="95">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="96">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="97">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="98">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="99">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="922">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="33">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import { useSystemStore } from '@/stores/modules/system'
import { PieChartOutlined } from '@ant-design/icons-vue'
defineOptions({ name: 'AppAsider' })
const selectedKeys = ref(['1'])
const systemStore = useSystemStore()
const sideCollapsed = computed(() => systemStore.sideCollapsed)

const showLogo = ref(true)
const showLogoTitle = ref(true)

watchEffect(() => {
  if (sideCollapsed.value) {
    showLogo.value = true
    showLogoTitle.value = false
  } else {
    showLogo.value = true
    setTimeout(() => {
      showLogoTitle.value = true
    }, 400)
  }
})
</script>

<style scoped>
.side::-webkit-scrollbar {
  width: 5px;
  transition: all 2s;
}

.side::-webkit-scrollbar-track {
  background-color: #001529;
}

.side::-webkit-scrollbar-thumb {
  background-color: #53616e;
  border-radius: 5px;
}
.title {
  transition: all 0.4s;
}
</style>
