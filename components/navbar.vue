<script setup lang="ts">
const route = useRoute();
const items_nav = ref([
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
    title: "Our Brands",
    link: "/brands",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
]);
const drawer = ref(false);
const drawerItems = ref([
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about" },
  { title: "OUR PRODUCTS", link: "/products" },
  { title: "SERVICES", link: "/services" },
  { title: "OUR BRANDS", link: "/brands" },
  { title: "CONTACT US", link: "/contact" },
]);

function include() {
  return [document.querySelector(".included")];
}

const onClickOutside = () => {
  if (drawer) drawer.value = false;
};
</script>

<template>
  <div class="lg:hidden h-[70px] z-50 bg-white fixed w-[100vw]">
    <div class="h-[70px] container shadow-[0px_10px_15px_0px_#0000000A]">
      <div class="flex items-center h-full">
        <NuxtLink to="/">
          <div class="">
            <v-img src="/images/ultimate_logo.png" width="133" />
          </div>
        </NuxtLink>

        <v-spacer />
        <div>
          <v-btn
            variant="flat"
            icon="mdi-menu"
            class="rounded-lg text-primary-color shadow-[0px_4px_4px_0px_#00000040] included"
            @click.stop="drawer = !drawer"
          ></v-btn>
        </div>
      </div>
    </div>
  </div>

  <div
    class="lg:hidden py-2 fixed z-[40] bg-[#f9f9f9] w-100 flex flex-col ease-out duration-300 rounded-b-lg shadow-[0px_10px_15px_0px_#0000000A]"
    :class="[drawer ? 'mt-[70px]' : 'mt-[-100%]']"
    v-click-outside="{ handler: onClickOutside, include }"
  >
    <NuxtLink
      class="py-3 px-5"
      v-for="(item, i) in drawerItems"
      :key="i"
      :to="item.link"
      @click="drawer = !drawer"
      v-ripple
    >
      {{ item.title }}
    </NuxtLink>
  </div>

  <div class="hidden lg:block h-[100px]">
    <div
      class="bg-white h-[100px] z-[50] w-100 fixed shadow-[0px_10px_15px_0px_#0000000A]"
    >
      <div class="flex items-center h-full container">
        <NuxtLink to="/">
          <div class="">
            <v-img src="/images/ultimate_logo.png" width="260px" />
          </div>
        </NuxtLink>

        <v-spacer />
        <div>
          <ul class="flex">
            <li v-for="(item, i) in items_nav" :key="i">
              <NuxtLink
                :to="item.link"
                class="nav-link pa-4 hover:text-primary-color font-bold"
                :class="[route.path == item.link ? 'text-primary-color' : '']"
                >{{ item.title.toUpperCase() }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
