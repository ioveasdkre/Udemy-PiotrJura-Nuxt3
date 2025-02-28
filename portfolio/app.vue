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
    <NuxtRouteAnnouncer />
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </div>
</template>
