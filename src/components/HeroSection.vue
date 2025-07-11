<script setup lang="ts">
import background from "@/assets/images/hero-background.png"
import HeroContent from "@/components/HeroContent.vue";
</script>

<template>
  <div class="hero-wrapper"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <HeroContent/>
  </div>
</template>

<style scoped lang="postcss">
  .hero-wrapper {
    @apply relative w-screen h-[80vh] bg-no-repeat bg-cover bg-center;
  }
  .hero-content {

  }
</style>
