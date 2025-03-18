<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAppStore } from "../../stores/store";
import { ref, watchEffect } from "vue";

const route = useRoute();
const appStore = useAppStore();

const service = ref<any>(null);

// Fetch service when component is initialized
watchEffect(() => {
  service.value = appStore.getService(route.params.id as string);
});

useHead({
  meta: [
    {
      name: "title",
      content: service.value.metaTitle,
    },
    {
      name: "description",
      content: service.value.metaDesc,
    },
  ],
});
</script>

<template>
  <div class="container">
    <h1 class="text-primary text-[35px] font-bold text-center mt-14">
      {{ service?.name.toUpperCase() }}
    </h1>
    <div class="mt-10 flex flex-col lg:flex-row">
      <div class="flex justify-center lg:w-fit">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img :src="service?.img" class="rounded-10" height="306px" cover />
        </div>
      </div>

      <div class="flex w-100">
        <div class="mt-[28px] lg:mt-0 flex flex-col px-5 lg:ml-10 w-100">
          <div class="pt-[20px] lg:!pt-[0px] text-[#474747] text-justify">
            <p>
              {{ service?.desc }}
            </p>
          </div>
          <div class="mt-8 grid grid-cols-2 gap-5">
            <div
              class="flex items-center"
              v-for="(point, i) in service?.points"
              :key="i"
            >
              <div>
                <v-img src="/images/point.png" height="34" width="34" />
              </div>
              <div class="ml-5">{{ point }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-7 h-[2px] bg-[#D9D9D9]"></div>

    <products class="pb-[40px] mb-6" />
    <div class="lg:hidden mb-12">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        OUR PRODUCTS
      </div>
      <div>
        <pdt-card />
      </div>
    </div>

    <carousel5 class="my-[80px]" />

    <contact />
  </div>
</template>
