// get-请求参数
export type GetDemoQueryType = {
  username: string;
  password: string;
};

// get-返回参数
export type GetDemoListType = {
  key: string;
  value: number;
};

// post-请求参数
export type PostDemoQueryType = {
  username: string;
  password: string;
};

// post-请求参数
export type PostDemoType = {
  username: string;
  token: string;
};

// 下载文件-请求参数
export type downFileQueryType = {
  code: string;
};
