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
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    // TODO: Markdown，JSON，YAML，CSV 檔案轉成 MongoDB 形式的 API
    '@nuxt/content',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }, // 頁面之間過度效果
  },
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
  // sitemap設定
  routeRules: {
    // 1️⃣ 這個頁面會在 build 時預渲染，適合 SEO
    '/': { prerender: true },
  },
  // sitemap設定
  site: {
    url: 'http://localhost:3000', // 替換為您的實際網站 URL
  },
});
