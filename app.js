const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {

  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>${data.title}</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial;
            text-align: center;
            background: linear-gradient(to right, #ff758c, #ff7eb3);
            color: white;
          }
          .container {
            margin-top: 80px;
          }
          h1 {
            font-size: 50px;
          }
          h2 {
            font-size: 30px;
          }
          img {
            width: 200px;
            margin-top: 20px;
            border-radius: 20px;
          }
          .heart {
            font-size: 40px;
            animation: beat 1s infinite;
          }
          @keyframes beat {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          footer {
            margin-top: 40px;
            font-size: 18px;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>❤️ ${data.message}</h1>
          <h2>${data.names}</h2>

          <div class="heart">💓 💓 💓</div>

          <img src="${data.image}" />

          <footer>${data.footer}</footer>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
