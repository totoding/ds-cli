<template>
  <a-layout class="h-full min-h-full">
    <Side />
    <a-layout>
      <Header />
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from './components/Header.vue'
import Side from './components/Side.vue'
</script>
<style scoped lang="scss">


</style>
