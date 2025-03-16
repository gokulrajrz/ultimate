<template>
  <NuxtLayout>
    <v-app class="bg-backgroundGrey">
      <navbar />
      <div class="h-[70px] lg:hidden"></div>
      <header-carousel v-if="route && showHeaderCarousel" />
      <NuxtPage />
      <app-footer />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Get the current route
const route = useRoute();

// Compute whether to show the header carousel
const showHeaderCarousel = computed(() => route.path !== "/contact");

useHead({
  title: "Ultimate Metal Equipments & Tools Trading Company",
});
</script>
