import type { AxiosPromise } from 'axios';
import { service } from '@/config/axios';

import { config } from '@/config/axios/config';

const { default_headers } = config;

/**
 * 请求数据方法
 * @param option
 * @param otherConfig
 * @author HXD
 */
function request(option: AxiosConfig, otherConfig: OtherReqConfigType) {
  const { url, method, params, data, headersType, responseType } = option;
  return service({
    url,
    method,
    params,
    data,
    responseType,
    headers: {
      'Content-Type': headersType || default_headers,
    },
    ...otherConfig,
  });
}

const default_other_config: OtherReqConfigType = { requestCancel: false };

function getFn<T = any>(option: AxiosConfig, otherConfig = default_other_config): AxiosPromise<T> {
  return request({ method: 'get', ...option }, otherConfig);
}

function postFn<T = any>(option: AxiosConfig, otherConfig = default_other_config): AxiosPromise<T> {
  return request({ method: 'post', ...option }, otherConfig);
}

function deleteFn<T = any>(option: AxiosConfig, otherConfig = default_other_config): AxiosPromise<T> {
  return request({ method: 'delete', ...option }, otherConfig);
}

function putFn<T = any>(option: AxiosConfig, otherConfig = default_other_config): AxiosPromise<T> {
  return request({ method: 'put', ...option }, otherConfig);
}

export function useAxios() {
  return {
    get: getFn,
    post: postFn,
    delete: deleteFn,
    put: putFn,
  };
}
