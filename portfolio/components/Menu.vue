<template>
  <div>
    <nav class="font-mono">
      <ul class="flex flex-col md:flex-row md:space-x-4">
        <li>
          <NuxtLink to="/" class="link">Main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="link">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-ch06" class="link">About Ch06</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="link">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog-ch07" class="link">Blog Ch07</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects-ch07" class="link">Projects Ch07</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog-ch08" class="link">Blog Ch08</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog-ch09" class="link">Blog Ch09</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog-ch10" class="link">Blog Ch10</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
}
</style>
