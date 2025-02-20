<template>
  <div class="container">
    <h1 class="text-primary text-[35px] font-bold text-center mt-14">
      {{ "special products & special brands".toUpperCase() }}
    </h1>
    <div class="mt-10 flex flex-col lg:flex-row gap-10 px-5 lg:px-10">
      <div class="flex justify-center items-center lg:w-fit">
        <div class="w-[373px] lg:max-w-[373px]">
          <v-img src="/images/sp-img-1.jpeg" class="rounded-10" cover />
        </div>
      </div>

      <div>
        <p>
          Welcome to our Special Products section, featuring an exclusive
          selection of high-quality fasteners designed for reliability and
          performance. Our offerings include the Anco Lock Nut, engineered for
          superior locking capabilities to ensure secure assemblies under
          vibration and dynamic loads. The Flex Lock Nut provides ease of
          installation with exceptional locking performance, accommodating
          slight variations in bolt sizes for a reliable grip in extreme
          conditions.
        </p>
        <p>
          We also offer the Nord-Lock Washer, a pioneering solution in bolt
          security with a wedge-locking design that prevents loosening due to
          vibration, making it perfect for heavy machinery and safety
          applications. Our Two Ear Clips are versatile, securing hoses and
          pipes with a robust design that ensures stability for both light and
          heavy-duty tasks.
        </p>
        <p>
          Stover Nuts are a time-tested choice for locking fasteners, featuring
          a conical top that creates a friction fit when tightened, ideal for
          applications where vibration is a concern. Drilled Bolts are designed
          for added security, with a hole through the bolt shaft perfect for
          safety wire applications, ensuring they remain in place even under
          severe conditions. Lastly, our Retainer Rings are essential for
          keeping components securely in place, available in internal and
          external options, manufactured to exact specifications for a perfect
          fit and maximum performance.
        </p>
      </div>
    </div>
    <h2
      class="text-primary text-[35px] font-bold text-center mt-16 flex justify-center"
    >
      <div class="shape bg-primary-color text-white pl-10 pr-2 mr-2">
        SPECIAL
      </div>
      PRODUCTS
    </h2>

    <sp-prod />

    <h2
      class="text-primary text-[35px] font-bold text-center mt-14 flex justify-center"
    >
      <div class="shape bg-primary-color text-white pl-10 pr-2 mr-2">
        SPECIAL
      </div>
      BRANDS
    </h2>

    <div
      class="container grid gap-5 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 py-14"
    >
      <div
        class="bg-white flex justify-center items-center drop-shadow-[0_4px_4px_#0000001A] rounded-lg"
        v-for="(brand, i) in sp_brands"
        :key="i"
      >
        <img :src="brand" alt="" />
      </div>
    </div>

    <div class="my-[70px] bg-[#d9d9d9] h-[1px]"></div>

    <products />

    <div class="lg:hidden">
      <div class="text-primary-color text-[35px] font-bold text-center my-7">
        OUR PRODUCTS
      </div>
      <div>
        <pdt-card />
      </div>
    </div>

    <carousel5 class="mb-[80px] mt-[80px]" />

    <contact />
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "~/stores/store";

useHead({
  meta: [
    {
      name: "title",
      content: "Our Special Products | Ultimate Equipments",
    },
    {
      name: "description",
      content:
        "Explore our special products like high-quality fasteners, Anco Lock Nuts, Flex Lock Nuts, Nord-Lock Washers, Stover Nuts & more. Contact us today!",
    },
  ],
});

const counter = useAppStore();

const sp_brands = ref(counter.sp_brands);
</script>

<style>
.shape {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 20% 100%);
}
</style>
