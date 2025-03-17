<template>
  <BlogCh09 v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </div>
  </BlogCh09>
</template>

<script lang="ts" setup>
defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
</script>
