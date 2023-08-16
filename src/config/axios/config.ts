// 全局环境变量
const env = import.meta.env;

const config: {
  base_url: string;
  result_code: number | string;
  expire_code: number | string;
  default_headers: AxiosHeaders;
  request_timeout: number;
  retry_time: number;
} = {
  /**
   * api请求基础路径
   */
  base_url: `${env.VITE_REQUEST_URL}`,

  /**
   * 接口成功返回状态码
   */
  result_code: 200,

  /**
   * token过期返回状态码
   */
  expire_code: 401,

  /**
   * 接口请求超时时间
   */
  request_timeout: 30000,

  /**
   * 接口请求失败重试次数
   */
  retry_time: 1,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json',
};

export { config };
