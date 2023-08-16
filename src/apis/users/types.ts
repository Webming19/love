// 用户列表
export type UserListType = {
  id: string;
  username: string;
};

// 新增用户-请求参数
export type AddUserQueryType = {
  username: string;
  password: string;
};

// 删除用户-请求参数
export type DelUserQueryType = {
  username: string;
};

// 修改密码-请求参数
export type ChangeUserQueryType = AddUserQueryType & {
  newPassword: string;
};
