<template>
  <v-carousel
    :show-arrows="false"
    height="350px"
    hide-delimiter-background
    cycle
    class="px-[10px]"
  >
    <v-carousel-item v-for="(review, i) in reviews" :key="i">
      <div class="h-full flex flex-col items-center justify-center">
        <div class="bg-white rounded-[70px] p-2">
          <v-avatar :image="review.img" size="90"></v-avatar>
        </div>
        <div class="text-[#FFDE00] mt-5 text-center">
          {{ review.name }}
          <span class="text-white" v-if="review.name"> - </span>
          <span class="text-white"> {{ review.company }}</span>
        </div>
        <div class="text-white mt-5 text-center max-w-[800px]">
          {{ review.desc }}
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
const reviews = ref([
  {
    img: "/images/testimonials/Anvar.jpeg",
    name: "Mr. Anvar Husain",
    company: "Polo Garments",
    desc: "We've been sourcing industrial spare parts from Ultimate Equipments for over a year, and their quality has never disappointed us. The durability of their equipments are unmatched, making them our go-to supplier for all our machinery needs.",
  },
  {
    img: "/images/testimonials/Shamsudeen.jpeg",
    name: "Shamsudeen Thekkethil",
    company: "Western Kitchen",
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
  // {
  //   img: "/images/testimonials/Anvar.jpeg",
  //   name: "Sarah M",
  //   company: "ABC Oil & Gas",
  //   desc: "The Ultimate team is always ready to help, ensuring we get exactly what we need on time.",
  // },
  {
    img: "/images/testimonials/Reji.jpeg",
    name: "Reji.A",
    company: "Extent Properties and General Maintenance Company llc",
    desc: "Top-notch service and exceptional quality products! Ultimate Metal Equipment and Tools has never let us down with their timely deliveries and competitive prices.",
  },
  {
    img: "/images/testimonials/hari.jpeg",
    name: "Hari Raj",
    company: "Enova",
    desc: "The team at Ultimate Metal Equipment and Tools is highly professional. Their customer support and product knowledge have been a great asset to us.",
  },
  {
    img: "/images/testimonials/Santosh.jpeg",
    name: "Mr. Santosh Ratnappa",
    company: "Emaar Facilities Management",
    desc: "We have searching building material spares and power tools from ultimate metal equipments for over years and their quality never disappointed us. The durability of their equipments are matched.",
  },
]);
</script>
