<script setup lang="ts">
const route = useRoute();
const AppStore = useAppStore();

const products = ref(AppStore.services);
const showDropdown = ref(false);

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
const drawer = ref(false);
const drawerItems = ref([
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about" },
  { title: "OUR PRODUCTS", link: "/products" },
  { title: "SERVICES", link: "/services" },
  {
    title: "SPECIAL PRODUCTS",
    link: "/special-products",
  },
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
      :class="[route.path == item.link ? 'text-primary-color' : '']"
    >
      {{ item.title }}
    </NuxtLink>
  </div>

  <div class="hidden lg:block h-[100px]">
    <div
      class="bg-white h-[100px] z-[50] w-100 fixed shadow-[0px_10px_15px_0px_#0000000A]"
    >
      <div class="flex items-center h-full px-[60px]">
        <NuxtLink to="/">
          <div class="">
            <v-img src="/images/ultimate_logo.png" width="200px" />
          </div>
        </NuxtLink>

        <v-spacer />
        <div>
          <ul class="flex">
            <li v-for="(item, i) in items_nav" :key="i">
              <NuxtLink
                :to="item.link"
                v-if="item.title.toLowerCase() != 'our products'"
                class="text-[12px] my-auto xl:text-sm nav-link hover:text-primary-color font-bold"
                :class="[route.path == item.link ? 'text-primary-color' : '']"
              >
                <p class="text-center p-3">
                  {{ item.title.toUpperCase() }}
                </p>
              </NuxtLink>

              <div
                v-else
                class="group text-[12px] xl:text-sm relative flex h-full hover:text-primary-color font-bold"
                @mouseenter="showDropdown = true"
                @mouseleave="showDropdown = false"
              >
                <NuxtLink
                  class="p-3 flex items-center justify-center"
                  :to="item.link"
                >
                  <p class="mr-1">{{ item.title.toUpperCase() }}</p>

                  <svg
                    class="-mr-1 size-5 text-gray-400 group-hover:rotate-180 transition-all"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </NuxtLink>
                <Transition
                  enter-active-class="transition-all duration-300 origin-top ease-out"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition-all duration-200 origin-top ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div
                    class="absolute bg-white shadow-xl rounded-lg border bottom-0 translate-y-[100%] px-8 py-5 w-[250px]"
                    v-if="showDropdown"
                  >
                    <ul>
                      <li
                        v-for="(item, i) in products"
                        :key="i"
                        class="mt-2 leading-[1.2] hover:text-primary-color py-2 border-b-[1px] border-[#cccccc]"
                      >
                        <NuxtLink :to="`/service/${item.id}`">{{
                          item.name
                        }}</NuxtLink>
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
