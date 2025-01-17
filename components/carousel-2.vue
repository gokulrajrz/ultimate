<template>
  <v-carousel :show-arrows="false" height="350px" hide-delimiter-background cycle class="px-[10px]">
    <v-carousel-item v-for="(review, i) in reviews" :key="i">
      <div class="h-full flex flex-col items-center justify-center">
        <div class="h-[90px] w-[90px]">
          <v-avatar :image="review.img" size="90"></v-avatar>
        </div>
        <div class="text-[#FFDE00] mt-5 text-center">
          {{ review.name
          }}<span class="text-white"> - {{ review.company }}</span>
        </div>
        <div class="text-white mt-5 text-center">
          {{ review.desc }}
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
const reviews = ref([
  {
    img: "/images/person.jpg",
    name: "Mr. Shamsudeen Thekkethil",
    company: "Western Kitchen Equipment Trading LLC",
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
  {
    img: "/images/person.jpg",
    name: "Mr. Shamsudeen Thekkethil",
    company: "Western Kitchen Equipment Trading LLC",
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
  {
    img: "/images/person.jpg",
    name: "Mr. Shamsudeen Thekkethil",
    company: "Western Kitchen Equipment Trading LLC",
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
  {
    img: "/images/person.jpg",
    name: "Mr. Shamsudeen Thekkethil",
    company: "Western Kitchen Equipment Trading LLC",
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
  {
    img: "/images/person.jpg",
    name: "Mr. Shamsudeen Thekkethil",
    company: "Western Kitchen Equipment Trading LLC",
    desc: "When it comes to Kitchen Equipments there are loads of commentators that talk a good game, but Ultimate help you make it happen.",
  },
]);
</script>
