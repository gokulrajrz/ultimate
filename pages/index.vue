<template>
  <div>
    <header-carousel />
    <banner />
    <div
      class="bg-[url('/images/bg-m2.png')] lg:bg-[url('/images/special-products-bg.jpg')] bg-[100%_auto] lg:bg-cover flex-col items-center py-12 flex"
    >
      <h2 class="text-white font-bold text-3xl">SPECIAL PRODUCTS</h2>

      <sp-prod :changeColor="true" />

      <h2 class="text-white font-bold text-3xl py-10">SPECIAL BRANDS</h2>

      <div class="bg-white w-full py-5">
        <div class="container flex flex-wrap gap-3 justify-center">
          <img :src="brand" alt="" v-for="(brand, i) in sp_brands" :key="i" />
        </div>
      </div>

      <NuxtLink to="/special-products">
        <button
          class="bg-[#ffffff] rounded-lg px-5 py-2 !text-[#C6282E] mt-8 flex items-center gap-2"
        >
          View More
          <ChevronRightIcon
            class="w-5 h-5 bg-primary-color text-white rounded-full"
          />
        </button>
      </NuxtLink>
    </div>
    <div
      class="py-10 bg-[url('/images/bg-m.png')] lg:bg-[url('/images/bg-1.png')] bg-cover flex items-center bg-center"
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
      <div
        class="text-primary-color text-[35px] font-bold text-center mt-14 lg:mb-[40px]"
      >
        ABOUT US
      </div>
      <div class="mt-10 flex lg:hidden flex-col lg:flex-row relative">
        <div class="flex justify-center items-center lg:w-fit">
          <div class="w-[373px] lg:max-w-[373px]">
            <v-img
              src="/images/abt-home-1.jpeg"
              class="rounded-10"
              height="306px"
              cover
            />
          </div>
        </div>

        <div class="flex lg:hidden">
          <div class="mt-[28px] lg:mt-0 flex justify-center flex-col">
            <div class="flex justify-center">
              <div
                class="text-2xl sm:text-3xl lg:text-[35px] font-bold max-w-[595px] text-center mb-8 mx-5"
              >
                {{
                  "ultimate metal Equipments and tools trading l.l.c".toUpperCase()
                }}
              </div>
            </div>
            <p class="text-justify">
              At Ultimate Metal Equipments, we take pride in being the UAE’s
              leading supplier of high-quality metal equipment and tools for
              various industries. Our commitment to quality and service ensures
              that you receive not only top-of-the-line tools and equipment but
              also the support necessary to maximize their effectiveness in your
              operations.
            </p>
            <p class="text-justify mt-3">
              Our extensive inventory includes everything from hand tools and
              power tools to specialized machinery, all sourced from trusted
              manufacturers renowned for their reliability and performance.
            </p>
            <p class="text-justify mt-3">
              Our team is dedicated to understanding your specific requirements
              and delivering solutions that improve your productivity and
              efficiency. Whether you need a single tool or a complete equipment
              overhaul, we are here to assist you every step of the way.
            </p>
            <p class="text-justify mt-3">
              Partner with UMET for all your tools and equipment needs, and
              experience a level of service and expertise that truly sets us
              apart.
            </p>
          </div>
        </div>
      </div>
      <div class="justify-center hidden lg:flex">
        <div
          class="text-2xl sm:text-3xl lg:text-[35px] font-bold max-w-[900px] text-center mb-8 mx-5"
        >
          {{
            "ultimate metal Equipments and tools trading l.l.c".toUpperCase()
          }}
        </div>
      </div>
      <div class="hidden lg:flex items-center">
        <img
          src="/images/abt-home-1.jpeg"
          alt=""
          class="h-[306px] min-w-[373px] object-cover about-home- rounded-[10px]"
        />
        <div class="ml-10">
          <p class="text-justify">
            At Ultimate Metal Equipments, we take pride in being the UAE’s
            leading supplier of high-quality metal equipment and tools for
            various industries. Our commitment to quality and service ensures
            that you receive not only top-of-the-line tools and equipment but
            also the support necessary to maximize their effectiveness in your
            operations.
          </p>
          <p class="text-justify mt-3">
            Our extensive inventory includes everything from hand tools and
            power tools to specialized machinery, all sourced from trusted
            manufacturers renowned for their reliability and performance.
          </p>
          <p class="text-justify mt-3">
            Our team is dedicated to understanding your specific requirements
            and delivering solutions that improve your productivity and
            efficiency. Whether you need a single tool or a complete equipment
            overhaul, we are here to assist you every step of the way.
          </p>
          <p class="text-justify mt-3">
            Partner with UMET for all your tools and equipment needs, and
            experience a level of service and expertise that truly sets us
            apart.
          </p>
        </div>
      </div>

      <div class="mt-[70px] mb-[40px] bg-[#d9d9d9] h-[1px]"></div>

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
        TESTIMONIALS
      </div>
      <div
        class="h-[350px] bg-[url(/images/testimonials-bg.png)] bg-center bg-cover"
      >
        <carousel-2 />
      </div>
    </div>

    <div class="container flex flex-col items-center">
      <div class="text-primary-color text-[35px] font-bold text-center mb-7">
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

    <div class="mt-15 mb-15">
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

useHead({
  meta: [
    {
      name: "title",
      content: "Ultimate Metal Equipments & Tools Trading Company",
    },
    {
      name: "description",
      content:
        "Discover top-quality metal equipments & tools with Ultimate Equipments. Our specialists are located throughout UAE, ready to meet your setup needs. Contact us!",
    },
  ],
});

const counter = useAppStore();

const sp_brands = ref(counter.sp_brands);
// const icons = counter.icons;

const brands = ref([
  "/images/brands/rbc.png",
  "/images/brands/skf.png",
  "/images/brands/makita.jpeg",
  "/images/brands/bosch.png",
  "/images/brands/dewalt.png",
  "/images/brands/sfc.png",
  "/images/brands/stanley.png",
  // "/images/brands/kawasaki.jpeg",
  // "/images/brands/bd.png",
]);

const clients = ref([
  "/images/clients/enova.png",
  "/images/clients/nov.png",
  "/images/clients/almansoori.png",
  "/images/clients/altrad.png",
  "/images/clients/mhps.jpeg",
  "/images/clients/serco.png",
  "/images/clients/sinyar.png",
  "/images/clients/yosh.png",
  "/images/clients/pom.png",
  "/images/clients/airport.png",
  "/images/clients/magenta.png",
  "/images/clients/mubadala.png",
  "/images/clients/etihad.png",
  "/images/clients/ados.png",
  "/images/clients/carrefour.png",
  "/images/clients/dubaiairport.png",
  "/images/clients/sorbonne.png",
  "/images/clients/seaworld.png",
  "/images/clients/8.png",
  "/images/clients/yas.png",
  "/images/clients/1.png",
  "/images/clients/3.png",
  "/images/clients/10.jpeg",
  "/images/clients/dubaimetro.png",
  "/images/clients/das.png",
  "/images/clients/emaar.png",
  "/images/clients/favco.png",
  "/images/clients/12.png",
  "/images/clients/13.png",
  "/images/clients/14.png",
  "/images/clients/15.png",
  "/images/clients/16.png",
]);

const icons: string[] = clients.value;
</script>

<style scoped>
.b-text-border {
  text-shadow: 0 0 5px #000;
}
</style>
