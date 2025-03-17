<!-- 設定 layout - 方法1 -->
<!-- layout 設定，但不建議，因這樣設定的 layout會被當作預設 -->
<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="layout"><NuxtPage /></NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const layout = 'another';
</script>  -->

<template>
  <div>
    <NuxtLayout><NuxtPage /></NuxtLayout>
    <NuxtRouteAnnouncer />
  </div>
</template>

<style>
/* 第一個名稱對應 nuxt.config.ts 中的 pageTransition 名稱 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
