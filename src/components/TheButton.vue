<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="postcss">
.btn {
  @apply bg-[#982F2F] px-8 py-3 font-bold text-[16px] w-max uppercase text-white;
}
</style>
