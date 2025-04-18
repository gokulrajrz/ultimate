<template>
  <div class="infinity-scroll-container w-full overflow-hidden">
    <div class="infinity-scroll-inner w-max flex flex-nowrap gap-5">
      <template v-for="i in 2" :key="i">
        <div
          v-for="(img, index) in imgs"
          :key="`brand-${i}-${index}`"
          class="flex items-center justify-center"
        >
          <img :src="img" width="150" height="auto" alt="Brand image" loading="lazy" />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  imgs: string[];
}>();
</script>

<style scoped>
.infinity-scroll-container {
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.infinity-scroll-inner {
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
