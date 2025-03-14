// https://router.vuejs.org/api/interfaces/routeroptions.html
// nuxt.com/docs/guide/recipes/custom-routing#using-approuteroptions
import type { RouterConfig } from '@nuxt/schema';

export default {
  // 定義滾動行為（scrollBehavior），它會在路由變更時被觸發
  scrollBehavior(to, _from, savedPosition) {
    // `to` 是目標路由的位址對象
    // `from` 是當前路由的位址對象
    // `savedPosition` 是當前頁面之前保存的滾動位置，如果沒有保存，則為 null

    // 如果有保存的滾動位置，則返回它，這樣可以在返回頁面時保持滾動位置
    if (savedPosition) {
      return savedPosition; // 返回先前儲存的位置
    }

    // 如果目標路由有 hash（即頁面內部錨點），則滾動到該位置
    if (to.hash) {
      return {
        el: to.hash, // 滾動到指定的元素（由 hash 指定）
        behavior: 'smooth', // 使用平滑滾動
      };
    }

    // 如果沒有 hash，則默認滾動到頁面頂部
    return {
      left: 0, // 水平方向滾動到頁面最左邊
      top: 0, // 垂直方向滾動到頁面最頂部
      behavior: 'smooth', // 使用平滑滾動
    };
  },
} satisfies RouterConfig;
