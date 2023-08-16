import type { AddUserQueryType, ChangeUserQueryType, DelUserQueryType, UserListType } from './types';
import { useAxios } from '@/hooks/web/useAxios';

const request = useAxios();
const base_url = '/api/user';

/**
 * 获取用户列表
 * @return Promise
 * @author HXD
 */
export async function getUserList(): Promise<ResType<UserListType[]>> {
  const res = await request.get({ url: `${base_url}/allUser` });
  return res && res.data;
}

/**
 * 增加用户
 * @param data
 * @return Promise
 * @author HXD
 */
export async function addUser(data: AddUserQueryType): Promise<ResType<string>> {
  const res = await request.post({ url: `${base_url}/addUser`, data });
  return res && res.data;
}

/**
 * 删除用户
 * @param params
 * @return Promise
 * @author HXD
 */
export async function delUser(params: DelUserQueryType): Promise<ResType<string>> {
  const res = await request.delete({ url: `${base_url}/delUser`, params });
  return res && res.data;
}

/**
 * 更新用户信息
 * @param data
 * @return Promise
 * @author HXD
 */
export async function updateUser(data: ChangeUserQueryType): Promise<ResType<string>> {
  const res = await request.put({ url: `${base_url}/update`, data });
  return res && res.data;
}
