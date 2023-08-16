import type {
  PostDemoQueryType,
  PostDemoType,
} from './types';
import { useAxios } from '@/hooks/web/useAxios';

const request = useAxios();
const base_url = '/api';

/**
 * 该接口文件以旧版项目管理为例，因为旧版项目管理接口比较完备，
 * 包含get、post、文件上传、二进制流的下载
 */

/**
 * post请求-接口示例
 * put请求类似
 * 以登录接口为例
 * @param data
 * @return Promise
 * @author HXD
 */
export async function postDemo(data: PostDemoQueryType): Promise<ResType<PostDemoType>> {
  const res = await request.post({ url: `${base_url}/user/login`, data });
  return res && res.data;
}

/**
 * 以FormData形式上传文件-接口示例
 * @param data
 * @return Promise
 * @author HXD
 */
export async function uploadFileDemo(data: FormData): Promise<ResType<string>> {
  const res = await request.post({
    url: `${base_url}/file/upload`,
    headersType: 'multipart/form-data; boundary=----WebKitFormBoundaryn8D9asOnAnEU4Js0',
    data,
  });
  return res && res.data;
}

/**
 * 二进制流下载文件-接口示例
 * @return Promise
 * @author HXD
 */
export async function downloadFileDemo(): Promise<BlobPart> {
  const res = await request.get({
    url: `${base_url}/file/streamDownload`,
    headersType: 'application/octet-stream',
    responseType: 'blob',
  });
  return res && res.data;
}
