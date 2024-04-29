<template>
  <div>
    <banner />
    <div
      class="h-[300px] lg:h-[350px] bg-[url('/images/bg-m.jpeg')] lg:bg-[url('/images/bg-1.png')] bg-cover mt-16 flex items-center bg-center"
    >
      <div class="container overflow-hidden">
        <div
          class="text-white text-lg sm:text-xl md:text-3xl lg:text-[48px] max-w-[818px] italic lg:leading-[60px] font-black exo-2 !text-center lg:!text-left"
        >
          {{ "Right Equipments Delivered at the Right time with unbeatable" }}
        </div>
        <div
          class="b-text-border text-[#FFF] text-xl sm:text-2xl md:text-4xl !text-center lg:!text-left lg:text-[65px] max-w-[734px] font-bold lg:leading-[75px] exo-2 lg:drop-shadow-[0_4px_6px_#000000]"
        >
          {{ "quality & affordable pricing".toUpperCase() }}
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
      <div class="h-[350px] bg-[url(/images/bg-2.png)] bg-cover">
        <carousel-2 />
      </div>
    </div>

    <div class="container flex flex-col items-center">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        OUR BRANDS
      </div>
      <carousel3 :icons="brands" />

      <div
        class="my-15 h-[2px] bg-[#d9d9d9] shadow-[0px_4px_4px_0px_#0000001A] w-100"
      ></div>

      <div class="text-primary-color text-[35px] font-bold text-center mb-7">
        OUR CLIENTS
      </div>
      <carousel4/>
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
const brands = ref([
  {
    img: "/images/brands/rbc.png",
  },
  {
    img: "/images/brands/skf.png",
  },
  {
    img: "/images/brands/makita.jpeg",
  },
  {
    img: "/images/brands/dewalt.png",
  },
  {
    img: "/images/brands/stanley.png",
  },
  {
    img: "/images/brands/kawasaki.jpeg",
  },
  {
    img: "/images/brands/bd.png",
  },
  {
    img: "/images/brands/bosch.png",
  },
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
