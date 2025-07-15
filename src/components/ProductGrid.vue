<script setup lang="ts">

import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <div class="product-grid">
    <ProductCard/>
  </div>
</template>

<style scoped lang="postcss">
  .product-grid {
    @apply grid grid-cols-4 gap-8;
  }
</style>
