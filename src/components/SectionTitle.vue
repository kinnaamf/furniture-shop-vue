<script setup lang="ts">
  const props = defineProps({
    title: String
  })
</script>

<template>
  <h2 class="section-title">{{ title }}</h2>
</template>
