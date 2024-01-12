// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-mongoose", "@nuxtjs/seo", "@nuxtjs/google-fonts", "@vueuse/nuxt"],
  app: {
    head: {
      templateParams: {
        separator: "•",
      },
    },
  },
  site: {
    url: "https://s.jooo.my.id",
    name: "URLShort",
    description: "convert your long URLs into manageable short links for easier sharing and improved usability!",
    defaultLocale: "en",
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  googleFonts: {
    families: {
      "Plus Jakarta Sans": true,
    },
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
  },
  // nuxtRateLimit: {
  //   routes: {
  //     "/api/generate": {
  //       maxRequests: 1,
  //       intervalSeconds: 3,
  //     },
  //   },
  // },
})
