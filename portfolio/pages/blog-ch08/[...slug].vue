<template>
  <article
    class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <!-- 寫法二 -->
    <div v-if="blogData">
      <div class="grid grid-cols-6 gap-16">
        <!-- 內容區域 -->
        <div
          :class="{
            'col-span-4': blogData.body?.toc?.links,
            'col-span-6': !blogData.body?.toc?.links,
          }"
        >
          <ContentRenderer :value="blogData" />
        </div>

        <!-- 目錄區域 -->
        <div class="col-span-2 not-prose" v-if="blogData.body?.toc?.links">
          <aside class="sticky top-8">
            <div class="font-semibold mb-2">Table of Contents</div>
            <nav>
              <TocLinks :links="blogData.body.toc.links" :active-id="activeId" />
            </nav>
          </aside>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
interface TocLink {
  id: string;
  text: string;
}

interface BlogPost {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  author?: string;
  ogTitle?: string;
  ogImage?: string;
  body?: {
    content?: string; // 用於存放Markdown內容或其他格式內容
    toc?: {
      links?: TocLink[];
    };
  };
}

const route = useRoute();
const slug = route.params.slug;
const dataPath = route.path;
const path = `/blog-ch08/${slug}`;
const activeId = ref<string>();

const { data: blogData } = await useAsyncData<BlogPost>(dataPath, () =>
  queryCollection('content').path(path).first(),
);

console.log(blogData);

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

onMounted(() => {
  // 明確指定 entries 參數的類型為 IntersectionObserverEntry[]
  // `entries` 是 `IntersectionObserver` 回調函數接收的參數，它是一個數組，包含所有被監視元素的交叉信息。
  // `IntersectionObserverEntry` 類型包含多個屬性，如元素的可見性、目標元素等信息。
  const callback = (entries: IntersectionObserverEntry[]) => {
    // 遍歷 `entries` 中的每一個 entry（即每一個被監視的元素）
    for (const entry of entries) {
      // `entry.isIntersecting` 為 `true` 表示該元素已經進入視口，`false` 則表示元素離開視口
      if (entry.isIntersecting) {
        // 當元素進入視口時，更新 `activeId` 為當前元素的 `id`
        activeId.value = entry.target.id;
        break; // 只需處理第一個符合條件的元素，之後停止迴圈
      }
    }
  };

  // 設定 IntersectionObserver
  // `IntersectionObserver` 會在監視的元素進入或離開視口時觸發回調函數
  const observer = new IntersectionObserver(callback, {
    root: null, // 設定監視的容器，`null` 表示視口（即瀏覽器窗口）
    threshold: 0.5, // 設定當元素的 50% 進入視口時觸發回調
  });

  // 查找所有的 h2 和 h3 元素
  // `document.querySelectorAll` 會選擇頁面上的所有 `h2` 和 `h3` 元素
  const elements = document.querySelectorAll('h2, h3');

  // 監視這些元素
  // 使用 `observer.observe(element)` 對每一個 `h2` 或 `h3` 元素進行監視
  for (const element of elements) {
    observer.observe(element);
  }

  // 清理觀察者
  // 當組件卸載時，取消對元素的監視
  // `onBeforeUnmount` 是一個 Vue 的生命周期鉤子，在組件卸載前執行
  onBeforeUnmount(() => {
    // 遍歷所有已經監視的元素，取消監視
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
