// demo 示例仓库/状态
import { defineStore } from 'pinia';

type DemoStoreType = {
  demoNum: number;
};

export const useDemoStore = defineStore('demoStore', {
  state: (): DemoStoreType => ({
    demoNum: 0,
  }),
  getters: {
    getDemoNum: (state): number => state.demoNum,
  },
  actions: {
    setDemoNum(demoNum: number) {
      this.demoNum = demoNum;
    },
  },

  // 开启数据缓存，存放位置sessionStorage
  persist: {
    key: 'demo-store',
    storage: window.sessionStorage,
  },
});
