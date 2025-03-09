import type { Config } from 'tailwindcss';
// TODO: @tailwindcss/typography 是 Tailwind CSS 官方提供的 排版優化插件，主要用來讓 長文本（如 Markdown、部落格文章、新聞、說明文件）更美觀、更易讀，而 無需手動編寫額外的 CSS。
// import typography from '@tailwindcss/typography';

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
