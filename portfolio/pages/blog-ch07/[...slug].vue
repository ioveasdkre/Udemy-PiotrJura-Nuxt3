<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
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
  ogImage?: string;
}

const route = useRoute();
const slug = route.params.slug;
const dataPath = route.path;
const path = `/blog-ch07/${slug}`;

const { data: blogData } = await useAsyncData<BlogPost>(dataPath, () =>
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
  ogImage: blogData.value?.ogImage || 'Default OpenGraph Image',
});
</script>
