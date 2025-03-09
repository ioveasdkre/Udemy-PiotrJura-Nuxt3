<template>
  <section class="not-prose">
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
    .where('path', 'LIKE', '/blog-ch07%') // 過濾 `/blog-ch07` 內的內容
    .where('path', 'NOT LIKE', '') // 過濾 `/blog-ch07` 內的內容
    .select('path', 'title') // 指定返回的欄位
    .all(),
);

console.log(posts);
</script>

<style></style>
