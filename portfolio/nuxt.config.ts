// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/content', // TODO: Markdown，JSON，YAML，CSV 檔案轉成 MongoDB 形式的 API
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          // 官方預設主題顏色 vscode 套件 shiki
          theme: {
            default: 'min-light',
            dark: 'min-dark',
          },
          langs: ['javascript', 'vue', 'html', 'css', 'typescript'],
        },
      },
    },
  },
  colorMode: {
    classSuffix: '',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
