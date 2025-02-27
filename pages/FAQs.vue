<template>
  <div class="container">
    <h1 class="text-primary text-[35px] font-bold text-center mt-14 mb-10">
      FAQs
    </h1>
    <div class="mb-[120px]">
      <Faq v-for="(faq, i) in faqs" :key="i" :class="[i != 0 ? 'mt-5' : '']" :faq=faq />
    </div>
  </div>
</template>

<script lang="ts" setup>
const faqs = ref([
  {
    question: "What is your office timings?",
    answer: "We work 08:30 AM - 06:00 PM, Saturday - Thursday.",
  },
  {
    question: "How to order items?",
    answer: "Feel free to write to us with your requirements or call us.",
  },
  {
    question: "How many locations you have?",
    answer:
      "OFFICE: 07, PLOT NO: 92, MUSSAFAH: M37, PO BOX NO: 8465, ABUDHABI - UAE Also find other location details here.",
  },
  {
    question: "Who can I talk to about purchasing hardware?",
    answer:
      "Contact a POS Specialist for help choosing the right hardware for your business.",
  },
]);
</script>

<style></style>
