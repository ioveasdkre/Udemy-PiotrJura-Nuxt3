<template>
  <div>
    <article class="prose dark:prose-invert prose-h1:text-2xl">
      <ContentRenderer v-if="aboutData" :value="aboutData" />
    </article>
  </div>
</template>
<script lang="ts" setup>
const path = `/about-ch06`;

const { data: aboutData } = await useAsyncData('about', () =>
  queryCollection('docs').path(path).first(),
);

// TODO: 設置 SEO
useSeoMeta({
  description: aboutData.value?.description || 'Default Description',
});
</script>
<style lang=""></style>
