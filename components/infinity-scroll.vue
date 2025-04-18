<template>
  <div class="infinity-scroll-container w-full overflow-hidden">
    <div class="scroll-track">
      <template v-for="j in 2" :key="j">
        <div class="scroll-content">
          <div
            v-for="(img, i) in imgs"
            :key="`${j}-${i}`"
            class="logo-tile"
            :style="{ backgroundImage: `url(${img})` }"
          />
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
  mask-image: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
}

.scroll-track {
  display: flex;
  width: max-content;
  animation: scroll 60s linear infinite;
}

.scroll-content {
  display: flex;
  gap: 1.25rem; /* Tailwind's gap-5 */
}

.logo-tile {
  width: 150px;
  height: 80px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

/* Infinite scroll effect */
@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
