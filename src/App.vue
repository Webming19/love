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
