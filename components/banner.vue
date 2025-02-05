<template>
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="[
          'drop-shadow-[0_4px_4px_0px_#00000040] py-8 px-6 flex flex-col justify-center items-center duration-200 text-[#C6282E]',
        ]"
        @mouseenter="card.hover = true"
        @mouseleave="card.hover = false"
      >
        <div
          class="pa-3 rounded-full mb-5 border-2 border-rose-500 transition-all duration-150"
          :class="[
            card.hover && 'text-white bg-primary-color ',
          ]"
        >
          <component :is="card.icon" class="text-[35px] !m-0" />
        </div>
        <div class="flex flex-col items-center">
          <div class="text-[16px] font-bold">{{ card.title }}</div>
          <div v-if="card.subtitle" class="flex mt-1 items-center">
            <div class="text-[14px]">{{ card.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primaryColor: "#C6282E",
      cards: [
        {
          title: "Delivery Information".toUpperCase(),
          subtitle: "Get a call back",
          icon: "i-vector-1",
          hover: false,
        },
        {
          title: "Shop All Categories".toUpperCase(),
          subtitle: "Let us know your enquiries",
          icon: "i-vector-2",
          hover: false,
        },
        {
          title: "24 x 7 Free Support".toUpperCase(),
          subtitle: "TEL: +971 2555 8890",
          icon: "i-vector-3",
          hover: false,
        },
      ],
    };
  },
};
</script>
