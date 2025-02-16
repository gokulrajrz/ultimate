<template>
  <NuxtLayout>
    <v-app class="bg-backgroundGrey">
      <navbar />
      <div class="h-[70px] lg:hidden"></div>
      <header-carousel />
      <NuxtPage />
      <app-footer/>
    </v-app>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Ultimate Metal Equipments & Tools Trading Company",
});
</script>
