<!-- Demo -->
<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function toCRUD() {
  router.push('/crud');
}
</script>

<template>
  <div class="demo-page">
    DemoComponent
    <el-button type="success" plain @click="toCRUD">
      跳转增删改查页面
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.demo-page {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #ecf0f3;
}
</style>
