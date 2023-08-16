<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = zhCn;
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
