export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/pinia.ts'],
  router: {
    middleware: ['auth'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
