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
    "@nuxt/image",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: 'preload',
          as: 'style',
          href: '/_nuxt/entry.css',
        }
      ]
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
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
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

  experimental: {
    inlineSSRStyles: true,
    renderJsonPayloads: true,
  }
});
