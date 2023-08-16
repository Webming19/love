import { defineStore } from 'pinia';
import store from '../index';
import { appModules } from '@/config/app';
import type { AppState } from '@/config/app';

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => appModules,
  persist: true,
  getters: {
    getTitle(): string {
      return this.title;
    },
  },
  actions: {
    setTitle(title: string) {
      this.title = title;
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
