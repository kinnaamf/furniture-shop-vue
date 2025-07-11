<script setup lang="ts">
  import logo from "@/assets/images/logo.png"
  import HeaderNav from "@/components/HeaderNav.vue";
  import UserIcon from "@/components/icons/UserIcon.vue";

  const username = ''
</script>

<template>
  <header class="header">
    <img :src="logo" alt="" class="header-logo">
    <HeaderNav/>
    <div class="header-user">
      <UserIcon/>
      {{ username }}
    </div>
  </header>
</template>

<style scoped lang="postcss">
  .header {
    @apply flex justify-between items-center px-14 py-2;
    background: linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0.1) 100%);
  }
  .header-logo {
    @apply h-24
  }
  .header-user {
    @apply flex gap-4 items-center
  }
</style>
