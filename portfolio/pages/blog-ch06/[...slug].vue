<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer v-if="blogData" :value="blogData" />
  </article>
</template>

<script lang="ts" setup>
interface BlogPost {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  author?: string;
  ogTitle?: string;
}

const route = useRoute();
const slug = route.params.slug;
const dataPath = route.path;
const path = `/blog-ch06/${slug}`;

// 建議改在 content.config.ts 設定資料模型
const { data: blogData } = await useAsyncData<BlogPost>(blog, () =>
  queryCollection('content').path(path).first(),
);

// TODO: 設置 SEO
useSeoMeta({
  title: blogData.value?.title || 'Default Title',
  description: blogData.value?.description || 'Default Description',
  keywords: blogData.value?.keywords || 'Default Keywords',
  robots: blogData.value?.robots || 'Default Robots',
  author: blogData.value?.author || 'Default Author',
  ogTitle: blogData.value?.ogTitle || 'Default OpenGraph Title',
});
</script>
