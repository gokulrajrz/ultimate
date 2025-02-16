<template>
  <div>
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
              src="/images/abt-home.jpeg"
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
                  "ultimate Equipments and tools trading l.l.c".toUpperCase()
                }}
              </div>
            </div>
            <p class="px-5 text-[#474747]">
              We offer extensive technical and product know-how, coupled with a
              deep understanding of modern setup requirements. UMET has
              specialists and consultants located throughout the UAE, ready to
              apply their knowledge and expertise to your current and future
              needs, and to recommend a comprehensive plan that meets your
              growing demands. Our commitment to quality and service ensures
              that you receive not only top-of-the-line tools and equipment but
              also the support necessary to maximize their effectiveness in your
              operations. At UMET, we pride ourselves on providing a wide range
              of tools and equipment tailored to various industries, from
              construction and manufacturing to maintenance and repair. Our
              extensive inventory includes everything from hand tools and power
              tools to specialized machinery, all sourced from trusted
              manufacturers renowned for their reliability and performance.
              Understanding the unique challenges faced by our clients, we take
              a personalized approach to every project. Our team is dedicated to
              understanding your specific requirements and delivering solutions
              that enhance productivity and efficiency. Whether you need a
              single tool or a complete equipment overhaul, we are here to
              assist you every step of the way. With a focus on innovation and
              the latest industry trends, UMET stays ahead of the curve to
              provide you with cutting-edge solutions that drive success. Our
              experts are continuously trained to ensure they remain
              knowledgeable about the latest technologies and advancements,
              enabling us to offer the best recommendations for your needs.
              Partner with UMET for all your tools and equipment needs, and
              experience a level of service and expertise that truly sets us
              apart. Together, we can build a foundation for success that meets
              the demands of today and prepares for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div class="hidden lg:block">
        <img
          src="/images/abt-home.jpeg"
          alt=""
          class="h-[306px] w-[373px] about-home rounded-[10px]"
        />
        <div class="flex justify-center">
          <div
            class="text-2xl sm:text-3xl lg:text-[35px] font-bold max-w-[595px] text-center mb-8 mx-5"
          >
            {{ "ultimate Equipments and tools trading l.l.c".toUpperCase() }}
          </div>
        </div>
        <p class="text-justify">
          We offer extensive technical and product know-how, coupled with a deep
          understanding of modern setup requirements. UMET has specialists and
          consultants located throughout the UAE, ready to apply their knowledge
          and expertise to your current and future needs, and to recommend a
          comprehensive plan that meets your growing demands. Our commitment to
          quality and service ensures that you receive not only top-of-the-line
          tools and equipment but also the support necessary to maximize their
          effectiveness in your operations. At UMET, we pride ourselves on
          providing a wide range of tools and equipment tailored to various
          industries, from construction and manufacturing to maintenance and
          repair. Our extensive inventory includes everything from hand tools
          and power tools to specialized machinery, all sourced from trusted
          manufacturers renowned for their reliability and performance.
          Understanding the unique challenges faced by our clients, we take a
          personalized approach to every project. Our team is dedicated to
          understanding your specific requirements and delivering solutions that
          enhance productivity and efficiency. Whether you need a single tool or
          a complete equipment overhaul, we are here to assist you every step of
          the way. With a focus on innovation and the latest industry trends,
          UMET stays ahead of the curve to provide you with cutting-edge
          solutions that drive success. Our experts are continuously trained to
          ensure they remain knowledgeable about the latest technologies and
          advancements, enabling us to offer the best recommendations for your
          needs. Partner with UMET for all your tools and equipment needs, and
          experience a level of service and expertise that truly sets us apart.
          Together, we can build a foundation for success that meets the demands
          of today and prepares for the challenges of tomorrow.
        </p>
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
]);

const icons: string[] = clients.value;
</script>

<style scoped>
.b-text-border {
  text-shadow: 0 0 5px #000;
}
</style>
