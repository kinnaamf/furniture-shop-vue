<script setup lang="ts">
  import {ref} from "vue";

  const isHovered = ref<boolean>(false);
</script>

<template>
  <div class="flex items-center gap-2">
    <svg width="16" height="15" viewBox="0 0 16 15"
         @mouseover="isHovered = true"
         @mouseout="isHovered= false"
         :fill="isHovered ? 'white' : 'none'"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" stroke-width="1.8"/>
    </svg>
    <span>Like</span>
  </div>
</template>

<style scoped lang="postcss">

</style>
