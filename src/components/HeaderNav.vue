<script setup lang="ts">

</script>

<template>
  <nav>
    <ul class="header-nav">
      <li class="hover:font-bold"><router-link to="">Home</router-link></li>
      <li class="hover:font-bold"><router-link to="">Shop</router-link></li>
      <li class="hover:font-bold"><router-link to="">Team</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
  .header-nav {
    @apply flex text-[16px] font-medium gap-[75px];
  }
</style>
