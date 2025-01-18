<template>
  <div>
    <banner />
    <div
      class="bg-[url('/images/special-products-bg.jpg')] bg-cover flex-col items-center py-12 hidden lg:flex"
    >
      <h2 class="text-white font-bold text-3xl">SPECIAL PRODUCTS</h2>

      <sp-prod :changeColor="true" />

      <h2 class="text-white font-bold text-3xl py-10">SPECIAL BRANDS</h2>

      <div class="bg-white w-full py-5">
        <div class="container flex flex-wrap gap-3 justify-center">
          <img :src="brand" alt="" v-for="(brand, i) in sp_brands" :key="i" />
        </div>
      </div>

      <button
        class="bg-[#ffffff] rounded-lg px-5 py-2 !text-[#C6282E] mt-8 flex items-center gap-2"
      >
        View More
        <ChevronRightIcon
          class="w-5 h-5 bg-primary-color text-white rounded-full"
        />
      </button>
    </div>
    <div
      class="py-10 bg-[url('/images/bg-m.jpeg')] lg:bg-[url('/images/bg-1.png')] bg-cover flex items-center bg-center"
    >
      <div class="container flex justify-center overflow-hidden">
        <div
          class="text-white text-center text-[32px] font-black max-w-[880px]"
        >
          {{
            "Right Equipments Delivered at the Right time with unbeatable quality & affordable pricing".toUpperCase()
          }}
        </div>
      </div>
    </div>

    <div class="about container pb-16">
      <div class="text-primary-color text-[35px] font-bold text-center mt-14">
        ABOUT US
      </div>
      <div class="mt-10 flex flex-col lg:flex-row">
        <div class="flex justify-center items-center lg:w-fit">
          <div class="w-[373px] lg:max-w-[373px]">
            <v-img
              src="/images/abt-1.jpeg"
              class="rounded-10"
              height="306px"
              cover
            />
          </div>
        </div>

        <div class="flex">
          <div class="mt-[28px] lg:mt-0 flex justify-center flex-col">
            <div class="flex justify-center">
              <div
                class="text-2xl sm:text-3xl lg:text-[35px] font-bold max-w-[595px] text-center mb-8 mx-5"
              >
                {{
                  "ultimate Equipments and tools trading l.l.c".toUpperCase()
                }}
              </div>
            </div>
            <div class="px-5 text-[#474747]">
              We offer extensive technical and product know how, coupled with a
              deep understanding of modern setup requirement. UMET has
              specialists / consultants located throughout the UAE, ready to
              apply their knowledge and expertise to your current and future
              needs, and to recommend a comprehensive plan that meets your
              growing demands.
            </div>
          </div>
        </div>
      </div>

      <div class="my-[70px] bg-[#d9d9d9] h-[1px]"></div>

      <products />

      <div class="lg:hidden">
        <div class="text-primary-color text-[35px] font-bold text-center my-7">
          OUR PRODUCTS
        </div>
        <div>
          <pdt-card />
        </div>
      </div>
    </div>

    <div class="mb-[80px]">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        PEOPLE SAYS
      </div>
      <div
        class="h-[350px] bg-[url(/images/testimonials-bg.png)] bg-center bg-cover"
      >
        <carousel-2 />
      </div>
    </div>

    <div class="container flex flex-col items-center">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        OUR BRANDS
      </div>
      <!-- <carousel3 :icons="brands" /> -->
      <infinity-scroll :imgs="brands" />

      <div
        class="my-15 h-[2px] bg-[#d9d9d9] shadow-[0px_4px_4px_0px_#0000001A] w-100"
      ></div>

      <div class="text-primary-color text-[35px] font-bold text-center mb-7">
        OUR CLIENTS
      </div>
      <infinity-scroll :imgs="icons" />
      <!-- <carousel4 /> -->
    </div>

    <div class="mt-20 mb-15">
      <g-map />
    </div>

    <div>
      <contact />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useAppStore } from "~/stores/store";

const counter = useAppStore();

const sp_brands = ref(counter.sp_brands);
const icons = counter.icons;

const brands = ref([
  "/images/brands/rbc.png",
  "/images/brands/skf.png",
  "/images/brands/makita.jpeg",
  "/images/brands/dewalt.png",
  "/images/brands/stanley.png",
  "/images/brands/kawasaki.jpeg",
  "/images/brands/bd.png",
  "/images/brands/bosch.png",
]);

const clients = ref([
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
]);
</script>

<style scoped>
.b-text-border {
  text-shadow: 0 0 5px #000;
}
</style>
