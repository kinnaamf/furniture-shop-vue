<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionTitle from "@/components/SectionTitle.vue";
import TheButton from "@/components/TheButton.vue";

import slides from "@/data/slides.ts";
import {ref} from "vue";
import LineIcon from "@/components/icons/LineIcon.vue";
import SlideArrowIcon from "@/components/icons/SlideArrowIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";

const paragraph = "Our designer already made a lot of beautiful<br>prototipe of rooms that inspire you"

const currentIndex = ref<number>(0);
const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex;
}
</script>

<template>
  <div class="slider-section">
    <div class="inspiration-section">
      <SectionTitle title="50+ Beeautiful rooms<br>inspiration" class="text-nowrap"/>
      <p
        class="mt-2"
        v-html="paragraph"></p>
      <TheButton class="mt-6">
        Explore More
      </TheButton>
    </div>
    <div class="swiper-container w-full">
      <Swiper
        :modules="[Navigation, Pagination]"
        :spaceBetween="20"
        :slidesPerView="2.2"
        @slideChange="onSlideChange"
        :navigation="{
          nextEl: '.next-slide',
          // prevEv: '.prev'
        }"
        pagination
        loop
        class="swiper"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="swiper-slide"
        >
          <div :style="{ backgroundImage: `url(${slide.image})` }"
               class="slide-image"
               :class="index === currentIndex ? 'first-image' : 'other-images'"
          >
            <div class="slide-content" v-if="index=== currentIndex">
              <div class="text-content">
                <div class="flex items-center gap-4 font-medium justify-center">
                  <span>0{{ slide.id }}</span>
                  <LineIcon/>
                  <span>{{ slide.title }}</span>
                </div>
                <div class="slide-subtitle">
                  <h2>{{ slide.subtitle }}</h2>
                </div>
              </div>
              <div class="to-content">
                <ArrowIcon/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SlideArrowIcon/>
      </Swiper>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.slide-content {
  @apply flex items-end absolute bottom-6 left-6
}

.text-content {
  @apply bg-white/70 px-2 pt-8 pb-6
}

.to-content {
  @apply bg-[#982F2F] p-4
}

.slide-subtitle {
  @apply font-semibold text-[32px]
}

.slider-section {
  @apply bg-[#FCF8F3] py-12 pl-24 flex gap-10 w-full;
}

.swiper-container {
  @apply overflow-x-hidden;
}

.slide-image {
  @apply w-full bg-cover bg-center overflow-x-hidden relative;
}

.swiper-slide {
  @apply overflow-hidden transition-all duration-500;
}

:deep(.swiper-pagination-bullet-active) {
  @apply w-6 h-6 rounded-full bg-[#982F2F];
  border: 2px solid #B88E2F;
  box-shadow: 0 0 0 6px white inset;
}

:deep(.swiper-pagination-bullets) {
  @apply flex justify-center items-center absolute
}

.first-image {
  @apply h-[600px] transition-all
}

.other-images {
  @apply h-[490px] transition-all
}

.swiper {
  @apply h-[600px]
}
</style>
