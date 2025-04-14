// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/google-fonts",
    "nuxt-svgo",
    "nuxt-swiper",
    "@pinia/nuxt",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination", "autoplay"],
  },
  svgo: {
    autoImportPath: "./assets/icons/",
    componentPrefix: "i",
  },
  googleFonts: {
    display: "swap",
    preload: true,
    preconnect: true,
    download: true,
    inject: true,
    families: {
      "Sofia Sans": true,
      Roboto: true,
      "Exo 2": true,
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
