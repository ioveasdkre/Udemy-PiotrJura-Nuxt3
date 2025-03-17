<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>date</div>
        <div>title</div>
      </div>

      <ul>
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path" class="column hover:bg-gray-100 dark:hover:bg-gray-800 group">
            <div
              :class="{
                'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800':
                  !post.displayYear,
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
  </slot>
</template>

<script lang="ts" setup>
interface BlogCollectionItem {
  path: string;
  title: string;
  publishedAt: Date; // 或者使用 `Date` 類型
  year: number;
  id: string;
}

interface BlogCollectionItemWithDisplayYear extends BlogCollectionItem {
  displayYear?: boolean;
}

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});

const { data } = await useAsyncData<BlogCollectionItemWithDisplayYear[]>('blog-ch09-list', () => {
  const query = queryCollection('blog10')
    .where('path', 'LIKE', '/blog-ch10/%') // 過濾 `/blog-ch08` 內的內容
    .select('path', 'title', 'publishedAt', 'year', 'id') // 指定返回的欄位
    .order('publishedAt', 'ASC'); // 依照 `publishedAt` 欄位排序

  if (props.limit) {
    query.limit(props.limit);
  }

  return query.all();
});

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
