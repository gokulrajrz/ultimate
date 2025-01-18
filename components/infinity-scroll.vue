<template>
  <div class="infinity-scroll-container w-full overflow-hidden">
    <div class="infinity-scroll-inner w-max flex flex-nowrap gap-5">
      <div
        v-for="(img, i) in imgs"
        :key="i"
        class="flex items-center justify-center"
      >
        <img :src="img" width="150px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  imgs: string[];
}>();

const imgs = [...props.imgs, ...props.imgs];

console.log(imgs);
</script>

<style>
.infinity-scroll-container {
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.infinity-scroll-inner {
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  from {
    transform: translate(0%);
  }

  to {
    transform: translate(calc(-50% - 10px));
  }
}
</style>
