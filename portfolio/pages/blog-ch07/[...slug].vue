<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentRenderer v-if="blogData" :value="blogData" />
  </article>
</template>

<script lang="ts" setup>
interface BlogPost {
  description?: string;
  ogImage?: string;
}

const route = useRoute();
const slug = route.params.slug;
const dataPath = route.path;
const path = `/blog-ch07/${slug}`;

const { data: blogData } = await useAsyncData<BlogPost>(dataPath, () =>
  queryCollection('docs').path(path).first(),
);

// TODO: 設置 SEO
useSeoMeta({
  description: blogData.value?.description || 'Default Description',
  ogImage: blogData.value?.ogImage || 'Default OpenGraph Image',
});
</script>
