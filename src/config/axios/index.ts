import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import qs from 'qs';
import axiosRetry from 'axios-retry';

import router from '@/router';

import { config } from '@/config/axios/config';

const { result_code, base_url, request_timeout, expire_code, retry_time } = config;
// export const PATH_URL = base_url;

const pendingMap = new Map();
/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config) {
  const { url, method } = config;
  return [url, method].join('&');
}
/**
 * 取消请求
 * 储存每个请求唯一值, 即cancel()方法
 * @param {*} config
 */
function addPending(config) {
  const pendingKey = getPendingKey(config);
  config.cancelToken
    = config.cancelToken
    || new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey))
        pendingMap.set(pendingKey, cancel);
    });
}
/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config) {
  const pendingKey = getPendingKey(config);
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey);
    cancelToken(pendingKey);
    pendingMap.delete(pendingKey);
  }
}

// 创建axios实例
const service: AxiosInstance = axios.create({
  // api 的 base_url
  baseURL: base_url,
  // 请求超时时间
  timeout: request_timeout,
});

// 当请求失败后，自动重新请求，只有3次失败后才真正失败
axiosRetry(service, { retries: retry_time });

// request 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any> & OtherReqConfigType) => {
    if (config.method === 'post' && config!.headers!['Content-Type'] === 'application/x-www-form-urlencoded')
      config.data = qs.stringify(config.data);

    // 是否取消重复请求
    if (config.requestCancel) {
      removePending(config);
      addPending(config);
    }

    // 添加token
    const token = sessionStorage.getItem('Authorization');
    token && (config!.headers!.Authorization = token);
    // get参数编码
    if (config.method === 'get' && config.params) {
      let url = config.url as string;
      url += '?';
      const keys = Object.keys(config.params);
      for (const key of keys) {
        if (config.params[key] !== undefined && config.params[key] !== null)
          url += `${key}=${encodeURIComponent(config.params[key])}&`;
      }
      url = url.substring(0, url.length - 1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    Promise.reject(error);
  },
);

// response 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<Recordable>) => {
    if (response.data.code === result_code) {
      return response;
    } else if (response.config.responseType === 'blob') {
      return response;
    } else {
      // ElMessage.error(response.data.msg);
      return Promise.reject(response.data.msg);
    }
  },
  (error: AxiosError) => {
    if (error.name === 'CanceledError')
      return Promise.reject(error);

    if (error.response?.status === expire_code) {
      sessionStorage.removeItem('Authorization');
      sessionStorage.removeItem('username');
      ElMessage.warning('登录信息过期，请重新登录！');
      router.push('/login');
      return Promise.reject(error);
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  },
);

export { service };
