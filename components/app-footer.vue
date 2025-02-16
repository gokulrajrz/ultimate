<template>
  <div class="bg-[url('/images/footer-bg.png')] bg-cover">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class="lg:mr-10">
          <div>
            <div class="text-[30px] font-bold mt-10 text-white">
              REQUEST FOR QUOTE
            </div>
            <v-text-field
              density="compact"
              placeholder="Name"
              variant="outlined"
              single-line
              class="mt-5"
              bg-color="white"
              color="white"
            ></v-text-field>
            <v-text-field
              density="compact"
              placeholder="Email address"
              single-line
              variant="outlined"
              bg-color="white"
              color="white"
            ></v-text-field>
            <v-text-field
              density="compact"
              placeholder="Phone"
              variant="outlined"
              single-line
              bg-color="white"
              color="white"
            ></v-text-field>
            <v-textarea
              placeholder="Request for a quote"
              variant="outlined"
              bg-color="white"
              color="white"
              density="compact"
            ></v-textarea>
            <div class="flex justify-center mb-16">
              <v-btn class="rounded-btn w-[109px] text-black">Submit</v-btn>
            </div>
          </div>
        </div>
        <div class="">
          <v-row class="lg:pt-16 pb-8">
            <v-col class="text-white px-5" cols="12" sm="6">
              <div class="text-[28px] font-bold">Products</div>
              <ul>
                <li v-for="(item, i) in products" :key="i" class="mt-2">
                  <NuxtLink
                    :to="`/service/${item.id}`"
                    class="hover:text-primary-color text-[20px]"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </v-col>
            <v-col class="text-white px-5" cols="12" sm="6">
              <div class="text-[28px] font-bold">Quick Links</div>
              <ul>
                <li v-for="(item, i) in links" :key="i" class="mt-2">
                  <NuxtLink
                    :to="item.link"
                    class="hover:text-primary-color text-[20px]"
                    >{{ item.title }}</NuxtLink
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div class="flex justify-end text-white mb-2">
      <NuxtLink
        to="/"
        class="px-4 border-r-[1px] border-[#fff] hover:text-primary-color"
        >FAQ's</NuxtLink
      >
      <NuxtLink
        to="/"
        class="px-4 border-r-[1px] border-[#fff] hover:text-primary-color"
        >Sitemap</NuxtLink
      >
      <NuxtLink to="/" class="px-4 hover:text-primary-color">Contact</NuxtLink>
    </div>
    <div class="bg-black flex justify-center py-4">
      <div>© Copyright ULTIMATE EQUIPMENTS</div>
    </div>
  </div>
</template>
<script lang="ts">
import { useAppStore } from "../stores/store";

export default defineComponent({
  setup() {
    const AppStore = useAppStore();

    const products = ref(AppStore.services);
    const links = ref([
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Our Products",
        link: "/products",
      },
      {
        title: "Services",
        link: "/services",
      },
      {
        title: "Special Products",
        link: "/special-products",
      },
      {
        title: "Our Brands",
        link: "/brands",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
    ]);
    return {
      products,
      links,
    };
  },
});
</script>
