/**
 * 二进制流-下载文件
 * @param fileBlob 文件二进制流
 * @param fileName 文件名
 * @param fileExtension 文件扩展名(文件后缀)
 * @author hxd
 */
function downloadFileByBlob(fileBlob: BlobPart, fileName: string, fileExtension: string) {
  // 匹配任意文件类型：type : "application/octet-stream"
  const blob = new Blob([fileBlob], { type: 'application/octet-stream' });
  const downloadElement = document.createElement('a');
  // 创建下载的链接
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  // 下载后文件名
  downloadElement.download = `${fileName}${fileExtension}`;
  document.body.appendChild(downloadElement);
  // 点击下载
  downloadElement.click();
  // 下载完成移除元素
  document.body.removeChild(downloadElement);
  // 释放掉blob对象
  window.URL.revokeObjectURL(href);
}

export { downloadFileByBlob };
