<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";

export default defineComponent({
  setup() {
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
    const items = ref([
      {
        title: "INDUSTRIAL & OIL-FIELD SPARE PARTS",
        desc: "Early recognition for the need of proper protection to the ever growing multi-national work force not only in the Construction field but also in theOil-Field & Industrial sector",
        img: ["/images/bg-banner.png","/images/bm-1.png"],
        link: "/service/1",
      },
      {
        title: "Power tools & pneumatic tools",
        desc: "We are one among the largest distributors of quality  professional tools with one of the largest range of  pneumatic and power tools",
        img: ["/images/banner-2.png","/images/bm-2.png"],
        link: "/service/3",
      },
      {
        title: "Engineering & hand tools",
        desc: "We cater from a vast list of Engineering & Hand Tools",
        img: ["/images/banner-3.png","/images/bm-3.png"],
        link: "/service/4",
      },
      {
        title: "OUR BRANDS & CLIENTS",
        desc: "",
        img: ["/images/banner-4.png","/images/bm-4.png"],
        link: "/brands",
      },
    ]);
    return {
      swiperPrevSlide,
      swiperNextSlide,
      onSwiper,
      items,
    };
  },
  mounted() {
    const headerloop = setInterval(() => {
      this.swiperNextSlide()
    },8000);
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
        delay: 1000,
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
      <SwiperSlide v-for="(item, i) in items" :key="i">
        <div class="h-[457px] relative">
          <div class="w-100 h-100 absolute">
            <img class="lg:hidden h-100 w-100" :src="item.img[1]"/>
            <img class="hidden lg:block h-100 w-100" :src="item.img[0]"/>
          </div>
          <div
            class="relative h-100 px-4 flex flex-col items-center justify-center z-[1]"
          >
            <div class="text-white flex flex-col items-center">
              <div class="text-3xl md:text-5xl font-bold mb-7 text-center">
                {{ item.title.toUpperCase() }}
              </div>
              <div
                class="md:text-[22px] max-w-[723px] leading-7 font-bold text-center"
              >
                {{ item.desc }}
              </div>
            </div>
            <NuxtLink
              class="mt-5 w-fit rounded-[50px] lg:rounded-[10px] overflow-hidden"
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

