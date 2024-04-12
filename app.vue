<template>
  <NuxtLayout>
    <v-app class="bg-backgroundGrey">
      <navbar />
      <header-carousel />
      <NuxtPage />
      <app-footer/>
    </v-app>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Ultimate Equipments",
});
</script>
