<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { id: 1, url: 'https://placehold.co/600x400' },
  { id: 2, url: 'https://placehold.co/600x450' },
  { id: 3, url: 'https://placehold.co/600x500' }
];
</script>

<template>
  <Swiper
    :modules="[Navigation, Pagination]"
    :spaceBetween="30"
    :slidesPerView="2"
    navigation
    pagination
    loop
    class="mySwiper"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <img :src="slide.url" class="w-full h-[400px] object-cover rounded-lg" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  max-width: 800px;
  margin: auto;
}
</style>
