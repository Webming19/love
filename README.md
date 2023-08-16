# 基于 Vite2 搭建的 Vue 3 项目，支持 Typescript

这个模板应该可以帮助你开始在 Vite 中使用 Vue 3 和 Typescript 进行开发。该模板使用 Vue 3 `<script setup></script>` 语法糖，查看 [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 了解更多的。

## **重要**：

1. 拉取项目后，请先执行`pnpm i`，下载 `/node_modules` ，等待执行完毕
2. `/node_modules`包安装完毕后，查看是否执行`husky install`，
   如果执行，将会生成在根目录下`.husky`文件夹，如果没有生成，请执行`yarn prepare`
3. `.husky`文件夹生成后，执行`npx husky add .husky/pre-commit "npx lint-staged"`，
   再执行`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`
4. 执行完以上步骤后，打开`.husky`文件夹下的`commit-msg`文件查看，第四行的双引号内是否有$1，没有请加上$1

提交代码前，请检查**eslint** | **stylelint** 是否通过(执行`yarn lint` | `yarn prettier` | `yarn style`)，通过后方可提交
否则会导致 git 代码回退到上一个版本

## 1.项目描述

### 1.1 分支介绍

本项目主要分为两个分支，第一个分支为主分支 `master/main` ，第二个分支为实验分支 `labs` 。

新功能/新配置会在 labs分支上进行测试，测试没问题后，合并到主分支。

### 1.2 推荐使用 WebStorm 进行开发

针对 Vue、React、Svelte等框架的代码提示等比较齐全。

插件推荐：

- .env files support
- .ignore
- Vite Integrated

### 1.3 推荐的 VSCode 设置

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### 1.4 类型支持 TS 中的 `.vue` 导入

由于 TypeScript 无法处理 .vue 导入的类型信息，默认情况下，它们被填充为通用的 Vue 组件类型。

通常，我们不需要关心模板之外组件的 props 类型。然而，如果希望在 `.vue` 导入中获得实际的 props 类型，（例如，使用手动 `h(...)` 调用时获取 props 验证），可以通过从 VSCode 命令面板运行 `Volar: Switch TS Plugin on/off` 来启用 Volar 的 `.vue` 类型支持插件。

## 2.项目初始化

### 2.1 package 命令：

安装 node_modules 建议使用 pnpm 既能节省磁盘空间，又能提升安装速度

```bash
# 安装依赖
yarn
pnpm i

# 启动本地服务
yarn serve

# 测试服务器-打包命令
yarn build:test
# 生产环境-打包命令
yarn build:prod

# 代码规范/修复
yarn lint
yarn prettier
yarn style

# 代码提交工具
yarn commit
# 打印提交日志
yarn genlog
```

## 3.项目目录结构

```shell
.
├── CHANGELOG.md  更新日志
├── Dockerfile  Docker配置文件
├── README.md   项目文档
├── commitlint.config.js  提交代码限制
├── index.html  html入口文件
├── package-lock.json
├── package.json  项目配置文件
├── pnpm-lock.yaml pnpm包安装版本锁定文件
├── postcss.config.js postcss配置文件
├── public  公共资源/静态资源目录
│  ├── css  css目录
│  ├── favicon.ico  项目图标
│  ├── fonts  字体目录
│  ├── img  图片目录
│  ├── js   js目录
│  └── video 视频目录
├── src
│  ├── App.vue
│  ├── apis   接口目录
│  │  └── demo
│  │      ├── index.ts
│  │      └── types.ts
│  ├── components 公共组件目录
│  │  └── DemoPage.vue
│  ├── config 功能配置目录
│  │  ├── app.ts
│  │  ├── axios
│  │  │  ├── config.ts
│  │  │  └── index.ts
│  │  └── webSocket
│  │      ├── config.ts
│  │      └── index.ts
│  ├── hooks hooks目录
│  │  ├── file
│  │  │  └── downloadFileByBlob.ts
│  │  ├── map
│  │  │  └── useBigeMap.ts
│  │  └── web
│  │      ├── useAxios.ts
│  │      ├── useTitle.ts
│  │      └── useWebSocket.ts
│  ├── main.ts  项目入口文件
│  ├── router 路由目录
│  │  └── index.ts
│  ├── store  项目状态目录
│  │  ├── index.ts
│  │  └── modules
│  │      ├── app.ts
│  │      └── demoStore.ts
│  ├── styles 公共样式目录
│  │  ├── font-face.scss
│  │  └── index.scss
│  ├── utils  项目公共方法目录
│  │  └── is.ts
│  └── views  视图目录
│      ├── Demo.vue
│      ├── Login.vue
│      └── NotFound.vue
├── stylelint.config.js
├── tsconfig.json TS配置文件
├── types   TS类型目录
│  ├── autoImports
│  │  ├── auto-imports.d.ts
│  │  └── components.d.ts
│  ├── env.d.ts
│  └── global.d.ts
├── vite.config.ts  vite配置文件
└── vue.config.ts vue配置文件
```

## 4.部分组件/插件的使用

### 4.1 element-plus-icon

关于element-plus的图标使用，可以手动引入，也可以自动引入，这里推荐自动引入。

使用方法：使用`<el-icon :size="20" :color="#ff00ff"></el-cion>`包裹，传递大小、颜色等参数

自动引入的图标使用`<i-ep-[] />`开头，[]中填入需要使用的图标名称，如`<i-ep-eleme-filled />`
```vue
<template>
   <el-icon :size="20" color="#ff00ff">
     <i-ep-eleme-filled />
   </el-icon>
</template>
```
