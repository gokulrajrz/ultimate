<template>
  <div class="container mt-[50px] flex gap-6 justify-center flex-wrap">
    <div
      class="w-max flex flex-col items-center font-semibold"
      v-for="prod in prods"
      :key="prod.id"
    >
      <div
        class="bg-[#D9D9D9] mb-3 rounded-[50%] p-3 border !border-[#E5461F] drop-shadow-[7px_7px_7px_rgba(0,0,0,0.75)]"
      >
        <img :src="prod.img" :alt="prod.name" class="w-[115px] h-[115px]" />
      </div>
      <p :class="changeColor ? 'text-white' : ''">{{ prod.name }}</p>
      <p :class="changeColor ? 'text-[#FFDE00]' : ''">{{ prod.type }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  changeColor: {
    type: Boolean,
    default: false,
  },
});

const prods = ref([
  {
    id: 1,
    name: "Anco Lock",
    type: "Nut",
    img: "/images/sp-prods/Anco-Lock.png",
  },
  {
    id: 2,
    name: "Flex Lock",
    type: "Nut",
    img: "/images/sp-prods/Flex-Lock-Nut.png",
  },
  {
    id: 3,
    name: "Nord Lock",
    type: "Washer",
    img: "/images/sp-prods/Nord-Lock-Washer.png",
  },
  {
    id: 4,
    name: "Two Ear",
    type: "Clip",
    img: "/images/sp-prods/Two-Ear-Clip.png",
  },
  {
    id: 5,
    name: "Stover",
    type: "Nut",
    img: "/images/sp-prods/Stover-Nuts.png",
  },
  {
    id: 6,
    name: "Drilled",
    type: "Bolts",
    img: "/images/sp-prods/Drilled-Bolts.png",
  },
  {
    id: 7,
    name: "Retainer",
    type: "Rings",
    img: "/images/sp-prods/Retainer-Rings.png",
  },
]);
</script>

<style></style>
