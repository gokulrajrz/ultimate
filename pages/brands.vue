<template>
  <div class="container">
    <div class="text-primary text-[35px] font-bold text-center mt-14 mb-10">
      OUR BRANDS
    </div>
    <div>
      <div class="flex flex-col lg:flex-row relative">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Industrial & Oil-Field Spare Parts
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in industrial" :key="i">
            <v-img :src="'/images/brands/industrial/' + i" height="62" alt="industrial company logo"/>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Fasteners
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in fasteners" :key="i">
            <v-img :src="'/images/brands/fasteners/' + i" height="62" alt="fasteners company logo"/>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Power Tools & Pneumatic Tools
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in power" :key="i">
            <v-img :src="'/images/brands/power-tools/' + i" height="62" alt="power company logo"/>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Engineering & Hand Tools
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in engneering" :key="i">
            <v-img :src="'/images/brands/engneering/' + i" height="62" alt="engineering company logo"/>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Measuring & Inspection Tools
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in measuring" :key="i">
            <v-img :src="'/images/brands/measuring/' + i" height="62" alt="measuring company logo"/>
          </div>
          <div></div>
          <div></div>
          <div class="h-[62px]"></div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Safety Products
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in safty" :key="i">
            <v-img :src="'/images/brands/safty/' + i" height="62" alt="safety company logo"/>
          </div>
          <div class="h-[62px]"></div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Lifting Equipment
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in lifting" :key="i">
            <v-img :src="'/images/brands/lifting/' + i" height="62" alt="lifting company logo"/>
          </div>
          <div class="h-[62px]"></div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Welding and Cutting Equipment
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in welding" :key="i">
            <v-img :src="'/images/brands/welding/' + i" height="62" alt="welding company logo"/>
          </div>
          <div class="h-[62px]"></div>
          <div class="h-[62px]"></div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row relative mt-12">
        <div
          class="absolute h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A]"
        ></div>
        <div
          class="!w-[100%] lg:!w-[288px] h-max font-bold text-xl/6 pa-4 bg-primary lg:rounded-bl-[30px] rounded-[5px] lg:rounded-[0px] text-center"
        >
          Electrical & Plumbing Materials
        </div>
        <div class="grid grid-cols-4 gap-5 w-100 pt-10 lg:pl-10">
          <div v-for="i in electrical" :key="i">
            <v-img :src="'/images/brands/electrical/' + i" height="62" alt="electrical company logo"/>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A] my-11"
    ></div>

    <div class="text-primary text-[35px] font-bold text-center mt-14 pt-15">
      OUR CLIENTS
    </div>

    <div
      class="h-[2px] w-100 bg-[#0000001A] shadow-[0px_4px_4px_0px_#0000001A] my-8"
    ></div>

    <div class="grid grid-cols-4 lg:grid-cols-6 gap-5 w-100 pt-4">
      <div v-for="i in icons" :key="i" class="bg-white">
        <v-img :src="'/images/clients/' + i" height="62" alt="client company logo"/>
      </div>
    </div>

    <products class="!pt-[60px]" />
    <contact class="mt-15" />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      name: "title",
      content: "Our Brands | Ultimate Equipments",
    },
    {
      name: "description",
      content:
        "We proudly represent a selection of renowned manufacturers & products as authorized agents & distributors  ensuring top-quality offerings for our customers.",
    },
  ],
});

const industrial = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
];
const fasteners = ["1.png", "2.png", "3.png", "4.png", "5.png"];
const power = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
const engneering = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
];
const measuring = ["1.png", "2.png"];
const safty = ["1.png", "2.png", "3.png", "4.png"];
const lifting = ["1.png", "2.png", "3.png", "4.png"];
const welding = ["1.png", "2.png", "3.jpeg"];
const electrical = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
];

const icons = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
];
</script>
