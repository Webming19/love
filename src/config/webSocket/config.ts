/* env全局环境变量 */
const env = import.meta.env;

/* webSocket全局变量 */
const config: {
  socket_url: string;
  result_code: number | string;
} = {
  /**
   * webSocket基础地址
   */
  socket_url: `ws://${env.VITE_REQUEST_URL}`,

  /**
   * 接口成功返回状态码
   */
  result_code: 200,
};

export { config };
