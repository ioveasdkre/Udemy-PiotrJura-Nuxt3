<template>
  <div>This page is about me.</div>
  <div><button @click="enableCustomLayout">Update layout</button></div>
</template>

<script lang="ts" setup>
// 設定 layout - 方法2
// definePageMeta({
//   layout: 'another',
// });

// 設定 layout - 方法3
const enableCustomLayout = () => {
  setPageLayout('another');
};
</script>

<style></style>
