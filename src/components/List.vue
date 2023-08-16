<!-- 列表 -->
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';

import type { UserListType } from '@/apis/users/types';
import { addUser, delUser, getUserList, updateUser } from '@/apis/users';

/* 新增用户 */
const ruleFormRef = ref<FormInstance>();
const rules: FormRules = reactive({
  username: { required: true, message: '请输入用户名', trigger: 'blur' },
  password: { required: true, message: '请输入密码', trigger: 'blur' },
});
const ruleForm: { username: string; password: string; } = reactive({
  username: '',
  password: '',
});
async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return;
  await formEl.validate((valid) => {
    if (valid) {
      addUser({ ...ruleForm }).then((res) => {
        res.code === 200 ? ElMessage.success(res.msg) : ElMessage.error(res.msg);
      });
    }
  });
}

/* 删除用户 */
const delUsername = ref('');
function handleDel() {
  delUser({ username: delUsername.value }).then((res) => {
    res.code === 200 ? ElMessage.success(res.msg) : ElMessage.error(res.msg);
  });
}

/* 修改密码 */
const username = ref('ls');
const oldPassword = ref('');
const newPassword = ref('');
const verifyPassword = ref('');

function changePassword() {
  if (newPassword.value !== verifyPassword.value)
    return ElMessage.warning('两次密码不一致');
  updateUser({
    username: username.value,
    password: oldPassword.value,
    newPassword: newPassword.value,
  }).then(res => res.code === 200 ? ElMessage.success(res.msg) : ElMessage.error(res.msg));
}

/* 查询用户列表 */
const userList = ref<UserListType[]>([]);
const columns = [
  {
    key: 'username',
    dataKey: 'username',
    title: '用户名',
    width: 150,
  },
  {
    key: 'id',
    dataKey: 'id',
    title: '🆔',
    width: 400,
  },
];
getUserList().then((res) => {
  if (res.code === 200)
    userList.value = res.data;
});
</script>

<template>
  <div class="list">
    <header>增删改查-Demo</header>
    <div class="crod-list">
      <!-- 增加用户 -->
      <div class="add-user">
        <h4>增加用户：</h4>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          status-icon
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              增加
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 删除用户 -->
      <div class="del-user">
        <h4>删除用户：</h4>
        <el-input v-model="delUsername" placeholder="请输入用户名" />
        <el-button type="danger" @click="handleDel">
          删除
        </el-button>
      </div>
      <!-- 修改密码 -->
      <div class="update-user">
        <h4>修改密码：</h4>
        <el-input v-model="username" disabled />
        <el-input v-model="oldPassword" type="password" placeholder="请输入旧密码" show-password />
        <el-input v-model="newPassword" type="password" placeholder="请输入新密码" show-password />
        <el-input v-model="verifyPassword" type="password" placeholder="验证新密码" show-password />
        <el-button type="primary" @click="changePassword">
          确定
        </el-button>
      </div>
    </div>
    <!-- 查询用户列表 -->
    <div class="user-list">
      <h4>查询用户列表：</h4>
      <el-table-v2
        :columns="columns"
        :data="userList"
        :width="900"
        :height="260"
        fixed
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  font-family: "Microsoft YaHei", serif;
  font-size: 16px;

  header {
    margin-bottom: 20px;
    font-size: 18px;
  }
}

.crod-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  margin-bottom: 20px;
}
</style>
