<template>
  <NuxtLayout>
    <v-app class="bg-backgroundGrey relative">
      <navbar />
      <div class="h-[70px] lg:hidden"></div>
      <!-- <header-carousel v-if="route && showHeaderCarousel" /> -->
      <NuxtPage />
      <div class="absolute right-5 bottom-5">
        <button>Get a Quote</button>
      </div>
      <app-footer />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

// Get the current route
const route = useRoute();

// Compute whether to show the header carousel
const showHeaderCarousel = computed(() => route.path !== "/contact");

useHead({
  title: "Ultimate Metal Equipments & Tools Trading Company",
});
</script>
