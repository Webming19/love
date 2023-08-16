declare type Fn<T = any> = {
  (...arg: T[]): T;
};

declare type ElementPlusSize = 'default' | 'small' | 'large';

declare type ElementPlusInfoType = 'success' | 'info' | 'warning' | 'danger';

declare type ComponentRef<T> = InstanceType<T>;

declare type LocaleType = 'zh-CN' | 'en';

declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>;

declare type AxiosHeaders = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';

declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put';

declare type AxiosResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

declare type OtherReqConfigType = {
  requestCancel?: boolean;
};

declare type AxiosConfig = {
  params?: any;
  data?: any;
  url?: string;
  method?: AxiosMethod;
  headersType?: string;
  responseType?: AxiosResponseType;
};

declare type ResType<T = any> = {
  code: number;
  msg: string;
  data: T extends any ? T : T & any;
};
