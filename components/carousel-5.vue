<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { useDisplay } from "vuetify";

export default defineComponent({
  setup() {
    const { smAndDown, md } = useDisplay();

    const icons = ref([
      {
        img: "/carousal/1.jpeg",
      },
      {
        img: "/carousal/2.jpeg",
      },
      {
        img: "/carousal/3.jpeg",
      },
      {
        img: "/carousal/4.jpeg",
      },
      {
        img: "/carousal/5.jpeg",
      },
      {
        img: "/carousal/6.jpeg",
      },
      {
        img: "/carousal/7.jpeg",
      },
      {
        img: "/carousal/8.jpeg",
      },
      {
        img: "/carousal/9.jpeg",
      },
      {
        img: "/carousal/10.jpeg",
      },
      {
        img: "/carousal/11.jpeg",
      },
      {
        img: "/carousal/12.jpeg",
      },
      {
        img: "/carousal/13.jpeg",
      },
      {
        img: "/carousal/14.jpeg",
      },
      {
        img: "/carousal/15.jpeg",
      },
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
    return {
      md,
      smAndDown,
      onSwiper,
      swiperNextSlide,
      swiperPrevSlide,
      icons,
    };
  },
});
</script>

<template>
  <div class="flex items-center relative w-full">
    <v-btn icon="mdi-chevron-left" size="small" @click="swiperPrevSlide" class="opacity-50"/>
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="smAndDown ? 2 : md ? 4 : 8"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      class="w-100 pr-5 mx-2"
    >
      <SwiperSlide v-for="(icon,i) in icons" :key="i" class="h-[60px] w-full">
        <div class="h-[60px] w-full flex items-center">
          <v-img :src="icon.img"></v-img>
        </div>
      </SwiperSlide>
    </Swiper>
    <v-btn icon="mdi-chevron-right" size="small" @click="swiperNextSlide" class="opacity-50" />
  </div>
</template>
