<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const swiperInstance = ref<any>(null);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
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
    desc: "Industrial and oil-field spare parts refer to components, equipment, and tools that are essential for the smooth operation and maintenance of industrial machinery and oil-field equipment",
    img: ["/images/banner/banner.jpeg", "/images/banner/bm-1.jpeg"],
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
  <div class="flex flex-col relative section-header">
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{ delay: 1000 }"
      :creative-effect="{
        prev: { shadow: false, translate: ['-20%', 0, -1] },
        next: { translate: ['100%', 0, 0] },
      }"
      class="w-100 !absolute"
    >
      <SwiperSlide v-for="(item, i) in items" :key="i">
        <div class="section-header relative">
          <div class="w-100 h-100 absolute">
            <img class="lg:hidden h-100 w-100" :src="item.img[1]" />
            <img class="hidden lg:block h-100 w-100" :src="item.img[0]" />
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
              class="w-fit rounded-[50px] lg:rounded-[10px] overflow-hidden"
              :class="[i == 3 ? '-mt-3' : 'mt-5']"
              :to="item.link"
            >
              <v-btn>Details</v-btn>
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="hidden lg:flex justify-between z-[1] opacity-70 my-auto">
      <v-btn icon="mdi-chevron-left" @click="swiperPrevSlide" class="ml-15" />
      <v-btn icon="mdi-chevron-right" @click="swiperNextSlide" class="mr-15" />
    </div>
  </div>
</template>

<style scoped>
.section-header {
  height: calc(100vh - 100px);
}
@media (max-width: 1023px) {
  .section-header {
    height: calc(100vh - 70px);
  }
}
</style>
