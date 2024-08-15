export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  experimental: {
    asyncContext: true
  },
  runtimeConfig: {
    baseUrl: process.env.API_BASE_URL,
    public: {
      baseUrl: process.env.API_BASE_URL
    }
  },

  typescript: {
    shim: false
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['@/assets/styles/main.css'],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/typescript-build'],
  sitemap: {
    hostname: 'http://localhost:3000/',
    gzip: true,
    routes: ['/', '/shopping-cart', '/book/_id']
  }
});
