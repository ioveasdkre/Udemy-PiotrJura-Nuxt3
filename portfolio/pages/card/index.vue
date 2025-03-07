<template>
  <div>
    <h1>{{ cardContent?.title }}</h1>
    <p>{{ cardContent?.description }}</p>
    <ContentRenderer v-if="cardContent" :value="cardContent" />
  </div>
</template>

<script setup lang="ts">
interface cardDto {
  description?: string;
  title?: string;
}
const { data: cardContent } = await useAsyncData<cardDto>('card-content', () =>
  queryCollection('docs').where('path', '=', '/card').first(),
);
</script>
