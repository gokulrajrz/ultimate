<template>
  <div class="mt-6 hidden lg:block">
    <div class="text-xl font-bold mb-5">OUR PRODUCTS</div>
    <div class="grid grid-cols-4">
      <div
        class="shadow-[0px_10px_15px_0px_#00000014] pa-5 rounded-[10px] bg-white mr-10"
      >
        <div
          v-for="(product, i) in products"
          :key="i"
          class="hover:text-primary-color cursor-pointer"
          :class="[index == i ? 'text-primary-color' : '']"
          @click="slideTo(i)"
        >
          <div class="flex items-center">
            <div>{{ product.name }}</div>
            <div class="ml-auto">
              <v-icon icon="mdi-chevron-right"></v-icon>
            </div>
          </div>
          <v-divider class="my-2"></v-divider>
        </div>
      </div>
      <div
        class="shadow-[0px_10px_15px_0px_#00000014] px-11 py-[30px] rounded-[10px] bg-white w-100 flex flex-col col-span-3"
      >
        <Swiper
          @swiper="onSwiper"
          :slides-per-view="1"
          :loop="false"
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
          @slide-change="onSlideChange()"
          class="w-100 my-auto"
        >
          <SwiperSlide v-for="(pdt, i) in products" :key="i">
            <div class="flex">
              <div
                class="border-primary-color min-w-[126px] h-[226px] border-[1px]"
              ></div>
              <div class="w-[210px] h-[186px] mt-5 -ml-[106px]">
                <v-img :src="pdt.img" cover height="186" width="210" />
              </div>
              <div class="ml-10">
                <div class="text-[26px] font-medium mt-5">
                  {{ pdt.name.toUpperCase() }}
                </div>
                <div class="mt-6 w-100">
                  {{ pdt.desc }}
                </div>
                <NuxtLink :to="`/service/${pdt.id}`">
                  <v-btn
                    class="mt-5 rounded-btn px-3 py-[10px] text-none"
                    variant="flat"
                    color="primary"
                    >View More<i-right-2 class="ml-2"
                  /></v-btn>
                </NuxtLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="flex justify-center mt-auto">
          <v-btn
            icon="mdi-chevron-left"
            color="#e6e6e6"
            variant="flat"
            @click="swiperPrevSlide"
          />
          <v-btn
            icon="mdi-chevron-right"
            variant="flat"
            color="#e6e6e6"
            class="ml-7"
            @click="swiperNextSlide"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { useAppStore } from "../stores/store";

export default defineComponent({
  name: "",

  setup() {
    const AppStore = useAppStore();

    const products = ref(AppStore.services);
    const swiperInstance = ref();
    const index = ref();

    const onSwiper = (swiper: any) => {
      swiperInstance.value = swiper;
      index.value = swiperInstance.value.activeIndex;
    };
    const onSlideChange = () => {
      index.value = swiperInstance.value.activeIndex;
    };
    const slideTo = (index: number) => {
      swiperInstance.value.slideTo(index, 0);
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
      slideTo,
      index,
      onSlideChange,
      products,
    };
  },
});
</script>
