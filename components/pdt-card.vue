<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="[
        i + 1 == total && i % 2 == 0
          ? 'col-span-2 flex justify-center lg:col-span-1'
          : '',
      ]"
    >
      <div
        class="bg-white shadow-[0px_4px_15px_0px_#00000014] rounded-b-lg"
        :class="[i + 1 == total && i % 2 == 0 ? 'w-[50%] lg:w-[100%]' : '']"
      >
        <div class="h-[120px] lg:h-[280px]">
          <v-img :src="item.img" cover height="100%"></v-img>
        </div>
        <div class="text-center px-2 py-3 text-[9px] font-medium">
          {{ item.title.toUpperCase() }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const items = ref([
  {
    img: "/images/home-card/1.png",
    title: "Industrial & oil-field spare parts",
  },
  {
    img: "/images/home-card/2.jpeg",
    title: "fasteners",
  },
  {
    img: "/images/home-card/3.jpeg",
    title: "power tools & pneumatic tools",
  },
  {
    img: "/images/home-card/4.jpeg",
    title: "measuring & inspection tools",
  },
  {
    img: "/images/home-card/5.jpeg",
    title: "engineering & hand tools",
  },
  {
    img: "/images/home-card/6.jpeg",
    title: "safety products",
  },
  {
    img: "/images/home-card/7.jpeg",
    title: "lifting equipment",
  },
  {
    img: "/images/home-card/8.jpeg",
    title: "welding equipment/ cutting & welding consumable",
  },
  {
    img: "/images/home-card/9.jpeg",
    title: "electrical & plumbing materials",
  },
]);
let total = items.value.length;
</script>
