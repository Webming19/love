<!-- 默认登录页面 -->
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { postDemo } from '@/apis/demo';

const env = import.meta.env;
const router = useRouter();

const loginData: { username: string; password: string; } = reactive({
  username: '',
  password: '',
});
const focusType = ref('');
const msg = ref('');
const loading = ref(false);

function submitForm() {
  loading.value = true;
  if (!loginData.username || !loginData.password) {
    loading.value = false;
    ElMessage.warning('请输入用户名密码');
  } else {
    // 发送登录请求，登录完成后跳转首页
    postDemo({ ...loginData }).then((res) => {
      if (res.code === 200) {
        sessionStorage.setItem('Authorization', `Bearer ${res.data.token}`);
        ElMessage.success('登录成功');
        router.push('/home');
      }
      loading.value = false;
    });
  }
}
</script>

<template>
  <section class="lg">
    <aside class="login-container">
      <main class="login">
        <div class="login-img" />
        <div class="login-box">
          <el-form :model="loginData" label-width="0">
            <el-form-item prop="username">
              <el-input
                v-model="loginData.username"
                autofocus
                maxlength="20"
                placeholder="请输入用户名"
                clearable
                class="el-input--username"
                :class="{ active: focusType === 'username' }"
                @keyup.enter="submitForm"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginData.password"
                maxlength="20"
                type="password"
                placeholder="请输入密码"
                show-password
                class="el-input--password"
                :class="{ active: focusType === 'password' }"
                onpaste="return false"
                @keyup.enter="submitForm"
              />
            </el-form-item>
            <el-form-item class="mgt50">
              <p class="login-msg">
                {{ msg }}
              </p>
              <el-button plain :loading="loading" type="primary" @click="submitForm">
                {{ `${loading ? '登录中' : '登 录'}` }}
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </main>
      <nav class="login-footer">
        ️{{ '基础项目' }} V<span>{{ env.VITE_VERSION }}</span>
      </nav>
    </aside>
    <video class="login-video" autoplay loop muted>
      <source src="/video/login/loginbg.mp4" type="video/mp4">
    </video>
  </section>
</template>

<style lang="scss" scoped>
$footer-height: 50px;

.lg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding-bottom: $footer-height;
}

.login {
  display: flex;
  width: 100%;
  height: 100%;
}

.login-img {
  width: 54%;
  height: 100%;
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 46%;

  .login-title {
    padding: 8px 2px;
    overflow: hidden;
    font-size: 40px;
    line-height: 24px;
    color: #262e54;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
  }
}

.el-form {
  width: 480px;
  height: 318px;
  padding: 30px 75px;
  margin: 30px auto;
  background: linear-gradient(to bottom, rgb(26 26 46 / 80%), rgb(26 26 46 / 50%));
  border-radius: 20px;
}

.el-form-item {
  margin-top: 30px;

  &::before {
    display: none !important;
  }
}

:deep(.el-input) {
  &::before {
    position: absolute;
    top: 50%;
    left: 26px;
    width: 20px;
    height: 20px;
    background: url("/public/img/login/user-img.png") no-repeat;
    background-size: contain;
    content: "";
    transform: translateY(-50%);
  }

  &.el-input--password::before {
    background: url("/public/img/login/pwd-img.png") no-repeat;
    background-size: contain;
  }

  .el-input__inner {
    height: 50px;
    padding-left: 55px;
    font-size: 16px;
    color: #e8e8e8;
    background-color: #262e54;
    border: 0 none;
    border-radius: 31px;
  }

  .el-input__wrapper {
    background: none;
    box-shadow: none;
  }
}

.login-tip {
  line-height: 20px;
}

.login-msg {
  padding-bottom: 3px;
  line-height: 18px;
  color: #ec2f4f;
  text-align: center;
}

.el-button {
  width: 100%;
  height: 50px;
  color: white;
  background-color: #41b2ff;
  border: 0 none;
  border-radius: 25px;
}

.login-footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  line-height: $footer-height;
  color: #e8e8e8;
  text-align: center;
  background-color: #0b0b0c;

  span {
    font-size: 18px;
  }
}

.login-video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 1920px;
  height: 1080px;

  source {
    width: 1920px;
    height: 1080px;
  }
}
</style>
