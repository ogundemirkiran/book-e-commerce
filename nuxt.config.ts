export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
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

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxt/image'],
  css: ['@/assets/styles/main.css'],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/typescript-build'],
  sitemap: {
    hostname: 'https://book-e-commerce-phi.vercel.app/',
    gzip: true,
    routes: ['/', '/shopping-cart', '/book/_id']
  }
});
