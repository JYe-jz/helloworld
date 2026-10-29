const http = require('http');
// 兼容云平台（Zeabur/Vercel/Render等）注入的 PORT 环境变量，本地运行时默认 3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  const now = new Date();
  const serverTime = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World - jz 的第一个网站</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      color: #fff;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
      text-align: center;
      padding: 0 20px;
    }
    .time-box {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      padding: 1.5rem 3rem;
      border-radius: 16px;
      font-size: 1.3rem;
      letter-spacing: 1px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .time-label {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  <h1>Hello World！我是jz，我的第一个AI开发的网站</h1>
  <div class="time-box">
    <div class="time-label">当前服务器时间</div>
    <div id="server-time">${serverTime}</div>
  </div>
</body>
</html>`;

  res.end(html);
});

server.listen(port, () => {
  console.log(`🚀 服务器已启动！`);
  console.log(`📡 访问地址: http://localhost:${port}`);
});
