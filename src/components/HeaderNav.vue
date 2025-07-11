<script setup lang="ts">

</script>

<template>
  <nav>
    <ul class="header-nav">
      <li><router-link to="">Home</router-link></li>
      <li><router-link to="">Shop</router-link></li>
      <li><router-link to="">Team</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
  .header-nav {
    @apply flex text-[16px] font-medium gap-[75px];
  }
</style>
