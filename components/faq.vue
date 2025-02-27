<template>
  <div class="bg-white shadow-md rounded-[10px] overflow-hidden">
    <div
      class="px-13 py-6 text-[26px] font-bold text-[#6C6C6C] border-b-[1px] border-[#cccccc] flex cursor-pointer"
      @click="open = !open"
    >
      <p class="w-full">{{ props.faq.question }}</p>
      <span>{{ open ? "-" : "+" }}</span>
    </div>
    <div
      class="px-13  text-[#6C6C6C] transition-all"
      :class="[open ? 'py-10' : 'max-h-0']"
    >
      <p>{{ props.faq.answer }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  faq: { question: string; answer: string };
}>();

const open = ref(false);
</script>

<style></style>
