<script lang="ts">
import { useDisplay } from "vuetify";

import "swiper/css";
import "swiper/css/navigation";

export default defineComponent({
  name: "",

  setup() {
    const swiperInstance = ref();

    const { mdAndDown } = useDisplay();
    const onSwiper = (swiper: any) => {
      swiperInstance.value = swiper;
    };
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext();
    };
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev();
    };
    return {
      swiperPrevSlide,
      swiperNextSlide,
      onSwiper,
    };
  },
});
</script>

<template>
  <div class="flex flex-col relative h-[457px]">
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      ]
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      class="w-100 !absolute"
    >
      <SwiperSlide v-for="slide in 3" :key="slide">
        <div
          class="h-[457px] bg-[url(/images/bg-banner.jpg)] bg-cover bg-center flex items-center justify-center px-4"
        >
          <div class="text-white flex flex-col items-center">
            <div class="text-4xl md:text-5xl font-bold mb-3 text-center">
              INDUSTRIAL & OIL-FIELD SPARE PARTS
            </div>
            <div
              class="md:text-[22px] max-w-[723px] leading-7 font-bold text-center"
            >
              Early recognition for the need of proper protection to the ever
              growing multi-national work force not only in the Construction
              field but also in the Oil-Field & Industrial sector
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="hidden lg:flex justify-between z-[1] opacity-70 my-auto">
      <v-btn icon="mdi-chevron-left" @click="swiperPrevSlide" class="ml-15" />
      <v-btn
        icon="mdi-chevron-right"
        @click="swiperNextSlide"
        class="mr-15"
      />
    </div>
  </div>
</template>
