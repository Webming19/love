/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types.ts
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_RUNTIME_ENV: string;
  readonly VITE_VERSION: string;
  readonly VITE_TITLE: string;
  readonly VITE_PROD_NAME: string;
  readonly VITE_REQUEST_URL: string;
  readonly VITE_MAP_URL: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
