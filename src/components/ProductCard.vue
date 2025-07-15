<script setup lang="ts">
import products from "@/data/products.ts"
import {ref} from "vue";
import AddToCardButton from "@/components/AddToCardButton.vue";
import ShareIcon from "@/components/icons/ShareIcon.vue";
import FavouritesIcon from "@/components/icons/FavouritesIcon.vue";

const hoveredIndex = ref<number | null>(null)
</script>

<template>
  <div
    v-for="(product, index) in products"
    :key="index"
    class="product-card"
    @mouseenter="hoveredIndex = index;"
    @mouseleave="hoveredIndex = null"
  >
    <transition name="fade">
      <div v-if="hoveredIndex == index" class="hovered-card">
        <div class="hovered-card-content">
          <AddToCardButton/>
          <div class="text-white font-semibold flex gap-8">
            <ShareIcon/>
            <FavouritesIcon/>
          </div>
        </div>
      </div>
    </transition>
    <div
      :style="{backgroundImage: `url(${product.image})`}"
      class="product-image"
    >
      <div
        class="product-discount"
        v-if="product.discount">-{{ product.discount }}%
      </div>
      <div
        class="product-new"
        v-if="product.isNew"
      >New
      </div>
    </div>
    <div class="product-data">
      <span class="product-title">{{ product.name }}</span>
      <span class="product-description">{{ product.description }}</span>
      <div class="price-container">
        <span class="product-price">{{ product.price -(product.price * product.discount / 100) }} MDL</span>
        <span class="product-old-price"
              v-if="product.discount > 0">{{ product.price }} MDL</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.product-image {
  @apply relative h-[430px] w-[350px] bg-cover bg-center bg-no-repeat;
}

.product-card {
  @apply text-[#3A3A3A] relative
}

.product-data {
  @apply flex flex-col gap-2;
  padding: 16px 26px 24px 16px;
}

.product-title {
  @apply text-[24px] font-semibold
}

.product-description {
  @apply text-[#898989] font-normal
}

.price-container {
  @apply flex justify-between;
}

.product-price {
  @apply text-[20px] font-semibold
}

.product-old-price {
  @apply line-through text-[#B0B0B0] text-[16px] font-normal px-2;
}

.product-discount {
  @apply text-white bg-[#982F2F] w-12 h-12 rounded-full flex items-center justify-center absolute right-6 top-6
}

.product-new {
  @apply text-white bg-[#136B4F] w-12 h-12 rounded-full flex items-center justify-center absolute right-6 top-6
}

.hovered-card {
  @apply bg-[#3A3A3A]/70 h-full w-full absolute z-10 top-0 flex items-center justify-center duration-200 transition-all
}
.hovered-card-content {
  @apply flex flex-col items-center gap-4;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-300;
}
.fade-enter-to, .fade-leave-from {
  @apply opacity-100;
}
</style>
