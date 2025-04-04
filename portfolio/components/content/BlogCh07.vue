<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>

    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
          <div
            :class="{
              'text-white dark:text-gray-900': !post.displayYear,
              'text-gray-400 dark:text-gray-500': post.displayYear,
            }"
          >
            {{ post.year }}
          </div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
interface BlogCollectionItem {
  path: string;
  title: string;
  publishedAt: Date; // 或者使用 `Date` 類型
  year: number;
}

interface BlogCollectionItemWithDisplayYear extends BlogCollectionItem {
  displayYear?: boolean;
}

const { data } = await useAsyncData<BlogCollectionItemWithDisplayYear[]>('blog-ch07-list', () =>
  queryCollection('blog07')
    .where('path', 'LIKE', '/blog-ch07/%') // 過濾 `/blog-ch07` 內的內容
    .select('path', 'title', 'publishedAt', 'year') // 指定返回的欄位
    .order('publishedAt', 'ASC') // 依照 `publishedAt` 欄位排序
    .all(),
);

console.log(data.value);

const posts = computed<BlogCollectionItemWithDisplayYear[]>(() => {
  if (!data.value) {
    return [];
  }

  const result: BlogCollectionItemWithDisplayYear[] = [];
  let lastYear = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    const displayYear = year !== lastYear;
    post.displayYear = displayYear; // 添加 displayYear 屬性
    post.year = year;
    result.push(post);
    lastYear = year;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
