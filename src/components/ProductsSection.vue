<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import ShowButton from "@/components/ShowButton.vue";
</script>

<template>
  <div class="products-section">
    <SectionTitle title="Our Products"/>
    <ProductGrid/>
    <ShowButton/>
  </div>
</template>

<style scoped lang="postcss">
  .products-section {
    @apply flex flex-col items-center gap-8 px-24;
  }
</style>
