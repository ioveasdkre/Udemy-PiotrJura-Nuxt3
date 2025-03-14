<template>
  <div>
    <h2 class="text-2xl font-semibold mb-10 max-w-none">Project</h2>
    <ContentRenderer v-if="blogContent" :value="blogContent" />
  </div>
</template>

<script lang="ts" setup>
const { data: blogContent } = await useAsyncData('blog-content', () =>
  queryCollection('content').path('/projects-ch07').first(),
);
</script>

<style></style>
