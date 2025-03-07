<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
// TODO:　useAsyncData　參數是　key，可自取
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('docs')
    .where('path', 'LIKE', '/blog-ch07%') // 過濾 `/blog` 內的內容
    .select('path', 'title') // 使用 select() 指定要返回的欄位
    .all(),
);
</script>

<style></style>
