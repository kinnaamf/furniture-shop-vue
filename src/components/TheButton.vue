<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="postcss">
.btn {
  @apply bg-[#982F2F] px-8 py-3 font-bold text-[16px] w-max uppercase text-white transition-all duration-300
  hover:bg-white hover:text-[#982F2F]
  ;
}
.btn:hover {
  box-shadow: 0 0 1px #982F2F inset;

}
</style>
