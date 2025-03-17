<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="content" :value="content" />
  </article>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Main Pafe',
  description: 'This is the main page',
  ogTitle: 'Main Page',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main Page',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
});

const route = useRoute();
const dataPath = route.path;
const path = `/`;

const { data } = await useAsyncData(dataPath, () => queryCollection('content').path(path).first());

// 避免 Hydration 錯誤
const content = computed(() => data.value || null);
</script>

<style></style>
