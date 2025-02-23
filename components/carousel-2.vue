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
        <div class=" bg-white rounded-[70px] p-2">
          <v-avatar :image="review.img" size="90"></v-avatar>
        </div>
        <div class="text-[#FFDE00] mt-5 text-center">
          {{ review.name
          }} <span class="text-white" v-if="review.name">-</span> <span class="text-white"> {{ review.company }}</span>
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
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
  {
    img: "/images/testimonials/Shamsudeen.jpeg",
    name: "Shamsudeen Thekkethil",
    company: "Western Kitchen",
    desc: "We've been sourcing industrial spare parts from Ultimate Equipments for over a year, and their quality has never disappointed us. The durability of their equipments are unmatched, making them our go-to supplier for all our machinery needs.",
  },
  // {
  //   img: "/images/testimonials/Anvar.jpeg",
  //   name: "Sarah M",
  //   company: "ABC Oil & Gas",
  //   desc: "The Ultimate team is always ready to help, ensuring we get exactly what we need on time.",
  // },
  {
    img: "/images/testimonials/person.png",
    name: "",
    company: "Extent Properties and General Maintenance Company llc",
    desc: "We compared several suppliers before choosing Ultimate Equipments and they offer the best prices without compromising on quality.",
  },
  {
    img: "/images/testimonials/person.png",
    name: "Hari Raj",
    company: "Ennova",
    desc: "As a construction firm, we rely on high-quality materials spare parts. Ultimate has been a trusted partner, supplying us with good quality products.",
  },
]);
</script>
