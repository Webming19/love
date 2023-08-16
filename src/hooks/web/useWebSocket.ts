import { config } from '@/config/webSocket/config';

const { socket_url } = config;

// 获取token
const token = sessionStorage.getItem('Authorization');

/**
 * 使用webSocket
 * @param url
 * @return WebSocket
 * @author hxd
 */
function useWebSocket(url: string): WebSocket {
  if (!token)
    return new WebSocket(`${socket_url}${url}`);
  return new WebSocket(`${socket_url}${url}`, token.substring(7));
}

/*
// 错误回调
websocket.onerror = function () {
  console.log('error');
};

// 握手成功回调
websocket.onopen = function (event) {
  console.log('open');
};

// 收到消息回调
websocket.onmessage = function (event) {
  console.log('收到消息 =>', event.data);
  console.log(event);
};

// 服务器断开连接 关闭回调
websocket.onclose = function () {
  console.log('close');
};

// 关闭页面前-断开webSocket连接
window.onbeforeunload = function () {
  websocket.close();
};

// 发送消息
function sendMessage() {
  if (websocket.readyState === 1) {
    const data = [];
    websocket.send(JSON.stringify(data));
  }
} */

export { useWebSocket };
