// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  modules: ['@nuxthq/ui'],
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
});
