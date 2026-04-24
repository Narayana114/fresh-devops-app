const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>My Real App</title>
        </head>
        <body style="font-family: Arial; text-align:center; margin-top:50px;">
          <h1>🚀 DevOps App Running</h1>
          <h2>❤️ Love you ye pichamma ❤️</h2>
          <p>Welcome to my real Node.js app</p>
          <a href="/api">Go to API</a>
        </body>
      </html>
    `);
  }

  else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: "API working",
      status: "success",
      app: "real-devops-app"
    }));
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
