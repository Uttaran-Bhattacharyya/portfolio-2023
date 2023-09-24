// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: {
    server: true,
    client: true,
  },
  css: ['~/assets/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
