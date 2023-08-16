// Map.js-BIGEMAP引入
const map_ip = import.meta.env.VITE_MAP_URL;
// 与地图相关的JS文件异步引入
const script: string[] = [
  // 引入bigemap的离线地图
  `http://${map_ip}/bigemap.js/v2.1.0/bigemap.js`,
];
export default new Promise((resolve) => {
  const link: any = document.createElement('link');
  link.rel = 'stylesheet';
  link.async = false;
  // 地图css文件，地址换成本地的服务器css文件即可
  link.href = `http://${map_ip}/bigemap.js/v2.1.0/bigemap.css`;
  document.head.appendChild(link);
  const loads = script.map((src) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    script.src = src;
    document.head.appendChild(script);
    return script;
  });
  // 获取最后一项内容
  const end: any = loads.pop();
  end.onload = resolve;
});
