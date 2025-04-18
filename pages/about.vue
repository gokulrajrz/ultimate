<template>
  <div class="container">
    <h1 class="text-primary-color text-[35px] font-bold text-center mt-14">
      ABOUT US
    </h1>
    <div class="mt-10 flex flex-col lg:flex-row">
      <div class="flex justify-center items-center lg:w-fit">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img
            src="/images/about-2-1.jpeg"
            alt="Industries"
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
                "ultimate metal Equipments and tools trading l.l.c".toUpperCase()
              }}
            </div>
          </div>
          <div class="px-5 text-[#474747]">
            We offer extensive technical and product know how, coupled with a
            deep understanding of modern setup requirement. UMET has
            specialists/consultants located throughout the UAE, ready to apply
            their knowledge and expertise to your current and future needs, and
            to recommend a comprehensive plan that meets your growing demands.
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block my-[70px] bg-[#d9d9d9] h-[1px]"></div>

    <div class="mt-10 flex flex-col lg:flex-row">
      <div class="flex lg:hidden justify-center items-center lg:w-fit">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img
            src="/images/about-3-1.jpeg"
            class="rounded-10"
            alt="Industries"
            height="306px"
            cover
          />
        </div>
      </div>

      <div class="flex">
        <div
          class="mt-[28px] lg:mt-0 flex justify-center flex-col mb-[20px] lg:mb-0"
        >
          <div class="flex justify-center">
            <div
              class="text-2xl sm:text-3xl text-primary lg:text-[35px] font-bold lg:text-left mb-8 w-100 mx-5"
            >
              {{ "WHAT WE DO".toUpperCase() }}
            </div>
          </div>
          <div class="px-5 text-[#474747]">
            A team of young individuals with a decade of experience in the
            industry of trading of material, tools and equipment identified the
            potential and opportunity the region has for professional sourcing
            experts who understands the right products required and delivers it
            at the right time in the most economical pricing. This thought paved
            way to the formation of Ultimate metal equipment and tools.
          </div>
        </div>
      </div>

      <div class="hidden lg:flex justify-center items-center lg:w-fit">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img
            src="/images/about-3-1.jpeg"
            class="rounded-10"
            height="306px"
            alt="Industries"
            cover
          />
        </div>
      </div>
    </div>

    <div class="hidden lg:block my-[70px] bg-[#d9d9d9] h-[1px]"></div>

    <div class="flex flex-col lg:flex-row">
      <div
        class="lg:hidden text-2xl sm:text-3xl text-primary text-center lg:text-[35px] mt-[40px] font-bold lg:text-left w-100"
      >
        {{ "Why Us?".toUpperCase() }}
      </div>
      <div class="flex justify-center items-center lg:w-fit my-4">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img
            src="/images/about-4.png"
            class="rounded-10"
            height="306px"
            alt="why us icon"
          />
        </div>
      </div>

      <div class="px-5 lg:ml-10">
        <div
          class="hidden lg:block text-2xl sm:text-3xl text-primary lg:text-[35px] font-bold lg:text-left mb-8 w-100"
        >
          {{ "Why Us?".toUpperCase() }}
        </div>
        <div class="text-[#474747]">
          It’s simply our expertise in understanding your requirement and
          meeting your expectations to the fullest.Your reason to choose us is
          simply..
        </div>

        <div class="my-7 flex flex-col items-center lg:items-start">
          <div>
            <div
              class="flex items-center mb-5"
              v-for="(point, i) in points"
              :key="i"
            >
              <div>
                <v-img
                  src="/images/point.png"
                  height="34"
                  width="34"
                  alt="why us icon"
                />
              </div>
              <div class="text-[#474747] ml-5 w-fit">{{ point.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <products class="py-[40px] mb-6" />

    <div class="lg:hidden mb-12">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        OUR PRODUCTS
      </div>
      <div>
        <pdt-card />
      </div>
    </div>

    <carousel5 class="mb-[80px]" />

    <contact />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/store";

useHead({
  meta: [
    {
      name: "title",
      content: "Metal Equipments & Tools Supplier | Ultimate Equipments",
    },
    {
      name: "description",
      content:
        "We are experienced Metal Equipments & Tools Supplier in UAE delivering quality materials, tools & equipment on time at the best prices. Contact us!",
    },
  ],
});

const counter = useAppStore();
const icons = counter.icons;

const points = [
  {
    title: "Competent Pricing",
  },
  {
    title: "Minimum delivery time",
  },
  {
    title: "Our expertise in sourcing",
  },
  {
    title: "Quality Materials",
  },
  {
    title: "Product Knowledge and Suggestions",
  },
];
</script>
