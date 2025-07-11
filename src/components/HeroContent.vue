<script setup lang="ts">

import TheButton from "@/components/TheButton.vue";

const title = "Discover\nsomething new"
const subtitle = "The ultimate furniture for your house. Be the coolest\nhouseperson with our  house fittings."
</script>

<template>
  <div class="hero-content">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <TheButton>Search now</TheButton>
  </div>
</template>

<style scoped lang="postcss">
  .hero-content {
    @apply flex flex-col gap-8 text-[#333333] bg-[#FFF3E3] w-max py-12 px-9 absolute right-8 shadow-2xl top-[15%]
  }
  .title {
    @apply whitespace-pre-line text-[32px] font-semibold
  }
  .subtitle {
    @apply whitespace-pre-line
  }
</style>
