import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspector from 'vite-plugin-vue-inspector';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import buildTimePlugin from 'vite-plugin-build-time';
import buildVersionPlugin from 'vite-plugin-build-version';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  resolve: { alias: { '@': _resolve('src') } },
  plugins: [
    vue(),
    Inspector(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({ prefix: 'Icon' }),
      ],
      dts: path.resolve(_resolve('types/autoImports'), 'auto-imports.d.ts'),
    }),
    // 自动引入组件
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({ enabledCollections: ['ep'] }),
      ],
      dts: path.resolve(_resolve('types/autoImports'), 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    // 获取打包时间
    buildTimePlugin(true),
    // 获取package版本
    buildVersionPlugin(JSON.stringify(process.env.npm_package_version), true),
    // 开启压缩
    viteCompression(),
    // 包分析
    visualizer({ open: true }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  // 配置主机地址
  server: {
    host: '0.0.0.0',
    port: 3300, // 端口号
    open: false, // 为true时打开默认浏览器
    // 配置本地代理地址
    // proxy: {}
  },
  base: './',
});
