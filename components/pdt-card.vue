<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
    <NuxtLink :to="`/service/${item.id}`" v-for="(item, i) in items" :key="i">
      <div
        :class="[
          i + 1 == items.length && i % 2 == 0
            ? 'col-span-2 flex justify-center lg:col-span-1'
            : '',
        ]"
      >
        <div
          class="bg-white shadow-[0px_4px_15px_0px_#00000014] rounded-b-lg"
          :class="[
            i + 1 == items.length && i % 2 == 0 ? 'w-[50%] lg:w-[100%]' : '',
          ]"
        >
          <div class="h-[120px] lg:h-[280px]">
            <v-img :src="item.img" cover height="100%"></v-img>
          </div>
          <div class="text-center px-2 py-3 text-[9px] font-medium">
            {{ item.name.toUpperCase() }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import { useAppStore } from "../stores/store";
export default defineComponent({
  setup() {
    const AppStore = useAppStore();
    const items = ref(AppStore.services);
    return {
      items,
    };
  },
});
</script>
