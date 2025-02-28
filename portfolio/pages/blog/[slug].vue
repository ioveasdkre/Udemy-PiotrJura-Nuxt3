<template>
  <div>We are inside a blog!</div>
  <div>Post id is {{ route.params.slug }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();

console.log(route);
</script>

<style></style>
