<template>
  <div>
    <ContentRenderer v-if="blogContent" :value="blogContent" />
  </div>
</template>

<script setup lang="ts">
const { data: blogContent } = await useAsyncData('blog-content', () =>
  queryCollection('docs').where('path', '=', '/blog-ch07').first(),
);
</script>

<style></style>
