<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { useDisplay } from "vuetify";

export default defineComponent({
  setup() {
    const { smAndDown, md } = useDisplay();

    const icons = ref([
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
  "/images/clients/5.png",
  "/images/clients/6.png",
  "/images/clients/7.png",
  "/images/clients/8.png",
  "/images/clients/9.png",
  "/images/clients/10.png",
  "/images/clients/11.png",
  "/images/clients/12.png",
  "/images/clients/13.png",
  "/images/clients/14.png",
  "/images/clients/15.png",
  "/images/clients/16.png",
  "/images/clients/17.png",
  "/images/clients/18.png",
  "/images/clients/19.png",
  "/images/clients/20.png",
  "/images/clients/21.png",
  "/images/clients/22.png",
  "/images/clients/23.png",
  "/images/clients/24.png",
  "/images/clients/25.png",
  "/images/clients/26.png",
  "/images/clients/27.png",
  "/images/clients/28.png",
  "/images/clients/29.png",
  "/images/clients/30.png",
  "/images/clients/31.png",
  "/images/clients/32.png",
]);

    const swiperInstance = ref();
    const onSwiper = (swiper: any) => {
      swiperInstance.value = swiper;
    };
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext();
    };
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev();
    };
    const loop = ref<any>();
    return {
      md,
      smAndDown,
      onSwiper,
      swiperNextSlide,
      swiperPrevSlide,
      icons,
      loop,
    };
  },
  mounted() {
    this.loop = setInterval(() => {
      this.swiperNextSlide();
    }, 1500);
  },

  beforeUnmount() {
    clearInterval(this.loop);
  },
});
</script>

<template>
  <div class="flex items-center relative w-full">
    <v-btn
      icon="mdi-chevron-left"
      size="small"
      @click="swiperPrevSlide"
      class="opacity-50 absolute left-0"
    />
    <div class="absolute w-full px-[60px]">
      <Swiper
        @swiper="onSwiper"
        :slides-per-view="smAndDown ? 2 : md ? 4 : 8"
        :loop="true"
        class="w-full pr-5"
      >
        <SwiperSlide v-for="(icon, i) in icons" :key="i" class="h-[60px] px-2">
          <div class="h-[60px] flex items-center">
            <v-img :src="icon"></v-img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <v-btn
      icon="mdi-chevron-right"
      size="small"
      @click="swiperNextSlide"
      class="opacity-50 absolute ml-auto right-0"
    />
  </div>
</template>
