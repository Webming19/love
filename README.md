# 我们的小窝

## **重要**：

1. 拉取项目后，请先执行`pnpm i`，下载 `/node_modules` ，等待执行完毕
2. `/node_modules`包安装完毕后，查看是否执行`husky install`，
   如果执行，将会生成在根目录下`.husky`文件夹，如果没有生成，请执行`npm run prepare`
3. `.husky`文件夹生成后，执行`npx husky add .husky/pre-commit "npx lint-staged"`，
   再执行`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`
4. 执行完以上步骤后，打开`.husky`文件夹下的`commit-msg`文件查看，第四行的双引号内是否有$1，没有请加上$1

提交代码前，请检查**eslint** | **stylelint** 是否通过(执行`yarn lint` | `yarn prettier` | `yarn style`)，通过后方可提交
否则会导致 git 代码回退到上一个版本

## 1.项目描述

我们的小窝

## 2.项目初始化

### 2.1 package 命令：

```bash
# 安装依赖
npm install
pnpm install

# 启动本地服务
npm run serve

# 打包命令
npm run build:prod

# 代码规范/修复
npm run lint
npm run prettier
npm run style

# 代码提交工具
npm run commit
# 打印提交日志
npm run genlog
```
