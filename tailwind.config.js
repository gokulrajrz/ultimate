/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./pages/*.vue",
    "./plugins/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    colors: {
      'primary-color':'#C6282E!important',
      'banner-grey':'#6C6C6C',
    },
    fontFamily:{
      sofia: [
        '"Sofia Sans"',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ]
    },
    extend: {
      container: {
        center: true,
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
