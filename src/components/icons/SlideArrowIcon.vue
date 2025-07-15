<template>
  <button class="next-slide">
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L12 11L1 21" stroke="#982F2F" stroke-width="2"/>
    </svg>
  </button>
</template>
<script setup lang="ts">
</script>
<style scoped lang="postcss">
.next-slide {
  @apply bg-white h-12 w-12 absolute right-[90px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full shadow-black shadow-2xl
}
</style>
