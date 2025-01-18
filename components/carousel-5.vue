<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { useDisplay } from "vuetify";

export default defineComponent({
  setup() {
    const { smAndDown, md } = useDisplay();

    const icons = ref([
      {
        img: "/images/clients/magenta.jpeg",
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
        <SwiperSlide v-for="(icon, i) in icons" :key="i" class="h-[60px]">
          <div class="h-[60px] flex items-center">
            <v-img :src="icon.img"></v-img>
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
