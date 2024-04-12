import "@mdi/font/css/materialdesignicons.css";

import { createVuetify, type ThemeDefinition } from "vuetify";
import "vuetify/styles";

const lighttheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#C6282E",
    rippleRed: "#f57378",
    backgroundGrey: "#f9f9f9",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "lighttheme",
      themes: {
        lighttheme,
      },
    },
    display: {
      mobileBreakpoint: "sm",
      thresholds: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
      },
    },
  });
  app.vueApp.use(vuetify);
});
