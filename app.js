const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>Love App</title>
        <style>
          body {
            background: linear-gradient(to right, #ff758c, #ff7eb3);
            font-family: Arial, sans-serif;
            text-align: center;
            color: white;
            margin-top: 100px;
          }
          h1 {
            font-size: 50px;
            animation: glow 2s infinite alternate;
          }
          h2 {
            font-size: 30px;
          }
          @keyframes glow {
            from { text-shadow: 0 0 10px white; }
            to { text-shadow: 0 0 30px red; }
          }
          .heart {
            font-size: 60px;
            animation: beat 1s infinite;
          }
          @keyframes beat {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        </style>
      </head>

      <body>
        <h1>❤️ Love You ❤️</h1>
        <h2>ye pichamma 💖</h2>
        <div class="heart">💓 💓 💓</div>
        <p>🚀 Deployed using Jenkins + Docker + Kubernetes</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
