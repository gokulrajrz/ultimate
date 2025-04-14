<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const swiperInstance = ref<any>(null);
const currentSlide = ref(0);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
  currentSlide.value = swiper.realIndex; // Get the active slide index
};

const swiperNextSlide = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext();
};

const swiperPrevSlide = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev();
};

const items = ref([
  {
    title: "INDUSTRIAL & OIL-FIELD SPARE PARTS",
    desc: "Essential Components for Reliable Machinery, Maintenance & Operations",
    img: ["/images/banner/banner.webp", "/images/banner/bm-1.webp"],
    link: "/service/Industrial&Oil-Field-Spare-Parts",
  },
  {
    title: "Power tools & pneumatic tools",
    desc: "We are one among the largest distributors of quality professional tools.",
    img: ["/images/banner/banner-2.jpeg", "/images/banner/bm-2.jpeg"],
    link: "/service/Power-Tools&Pneumatic-Tools",
  },
  {
    title: "Engineering & hand tools",
    desc: "We cater from a vast list of Engineering & Hand Tools.",
    img: ["/images/banner/banner-3.jpeg", "/images/banner/bm-3.jpeg"],
    link: "/service/Engineering&Hand-Tools",
  },
  {
    title: "OUR BRANDS & CLIENTS",
    desc: "",
    img: ["/images/banner/banner-4.jpeg", "/images/banner/bm-4.jpeg"],
    link: "/brands",
  },
]);

onMounted(() => {
  setInterval(() => {
    swiperNextSlide();
  }, 8000);
});
</script>

<template>
  <div class="flex relative section-header">
    <Swiper
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{ delay: 8000 }"
      :creative-effect="{
        prev: { shadow: false, translate: ['-20%', 0, -1] },
        next: { translate: ['100%', 0, 0] },
      }"
      class="w-100 !absolute z-[5]"
    >
      <SwiperSlide v-for="(item, i) in items" :key="i">
        <div class="section-header relative">
          <div class="w-100 h-100 absolute">
            <img class="lg:hidden h-100 w-100" :src="item.img[1]" :alt="item.title" />
            <img class="hidden lg:block h-100 w-100" :src="item.img[0]" :alt="item.title"/>
          </div>
          <div
            class="relative h-100 px-4 flex flex-col items-center justify-center z-[1]"
          >
            <div class="text-white flex flex-col items-center">
              <div
                class="text-3xl md:text-5xl font-bold mb-7 text-center"
                :class="[i == 3 ? '-mt-12' : 'mt-5']"
              >
                {{ item.title.toUpperCase() }}
              </div>
              <div
                class="md:text-[22px] max-w-[723px] leading-7 font-medium text-center"
              >
                {{ item.desc }}
              </div>
            </div>
            <NuxtLink
              class="w-fit rounded-[50px] lg:rounded-[10px] overflow-hidden mt-5"
              :class="{ 'filter grayscale': currentSlide !== items.length - 1 }"
              :to="item.link"
            >
              <v-btn class="hover:bg-primary-color hover:text-[#ffffff]"
                >Details</v-btn
              >
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="hidden lg:block ml-15 z-[1] my-auto">
      <v-btn icon="mdi-chevron-left" @click="swiperPrevSlide" />
    </div>
    <div class="hidden lg:block mr-15 z-[1] my-auto ml-auto">
      <v-btn icon="mdi-chevron-right" @click="swiperNextSlide" />
    </div>

    <!-- Bouncing arrow using CSS animation -->
    <div
      class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/chevron-down.svg"
        class="w-8 h-8 "
        :class="[currentSlide === items.length - 1 ? '' : 'filter invert']"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce {
  animation: bounce 1.5s infinite ease-in-out;
}

.section-header {
  height: calc(100vh - 100px);
}

@media (max-width: 1023px) {
  .section-header {
    height: calc(100vh - 70px);
  }
}
</style>
