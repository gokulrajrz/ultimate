<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { useDisplay } from "vuetify";

export default defineComponent({
  setup() {
    const { smAndDown, md } = useDisplay();

    const icons = ref([
      {
        img: "/images/clients/magenta.png",
      },
      {
        img: "/images/clients/mhps.jpeg",
      },
      {
        img: "/images/clients/enova.png",
      },
      {
        img: "/images/clients/almansoori.png",
      },
      {
        img: "/images/clients/nov.png",
      },
      {
        img: "/images/clients/altrad.png",
      },
      {
        img: "/images/clients/serco.png",
      },
      {
        img: "/images/clients/yas.png",
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
