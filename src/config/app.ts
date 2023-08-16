export type AppState = {
  title: string;
};

export const appModules: AppState = {
  title: import.meta.env.VITE_TITLE, // 标题
};
