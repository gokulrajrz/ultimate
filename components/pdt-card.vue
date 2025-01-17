<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="[
        i + 1 == items.length && i % 2 == 0
          ? 'col-span-2 flex justify-center lg:col-span-1'
          : '',
      ]"
    >
      <NuxtLink
        :to="`/service/${item.id}`"
        :class="[
          i + 1 == items.length && i % 2 == 0 ? 'w-[50%] lg:w-[100%]' : '',
        ]"
      >
        <div class="bg-white shadow-[0px_4px_15px_0px_#00000014] rounded-b-lg h-100 hover:scale-105 transition ease-in-out flex flex-col">
          <div class="h-[120px] lg:h-[280px]">
            <v-img :src="item.img" cover height="100%"></v-img>
          </div>
          <div class="text-center px-2 py-3 text-sm lg:text-base font-medium flex-1 flex justify-center items-center">
            {{ item.name.toUpperCase() }}
          </div>
        </div>
      </NuxtLink>
    </div>
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
