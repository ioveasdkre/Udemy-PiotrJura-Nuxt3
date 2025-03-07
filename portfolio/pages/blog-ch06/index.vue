<template>
  <div>
    <article class="prose dark:prose-invert prose-h1:text-2xl">
      <ContentRenderer v-if="aboutData" :value="aboutData" />
      <ContentDoc path="/card" />
    </article>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const dataPath = route.path;
const path = `/about-ch06`;

const { data: aboutData } = await useAsyncData(dataPath, () =>
  queryCollection('docs').path(path).first(),
);

// TODO: 設置 SEO
useSeoMeta({
  description: aboutData.value?.description || 'Default Description',
});
</script>
<style lang=""></style>
