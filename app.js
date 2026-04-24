const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family:Arial;text-align:center;margin-top:80px;">
        <h1>🚀 My DevOps App is Running</h1>
        <h2>Love you ye pichamma ❤️</h2>
        <p>Deployed using Jenkins + Docker + Kubernetes</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
