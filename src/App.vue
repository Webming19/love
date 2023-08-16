<script setup lang="ts">
import type { TranslatePair } from 'element-plus/es/locale';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const locale: { name: string; el: TranslatePair; } = zhCn;
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style scoped lang="scss">
// nprogress样式配置，必须使用id选择器
#nprogress .bar {
  background: #98e0fc !important;
}
</style>
