const http = require("http");
const fs = require("fs");

const PORT = 3000;

http.createServer((req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
<!DOCTYPE html>
<html>
<head>
<title>${data.title}</title>
<style>
body{
  margin:0;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:Arial;
  background:linear-gradient(135deg,#ff4b7d,#7b2ff7);
}
.card{
  width:420px;
  padding:35px;
  border-radius:25px;
  text-align:center;
  color:white;
  background:rgba(255,255,255,0.18);
  box-shadow:0 20px 50px rgba(0,0,0,0.3);
  backdrop-filter:blur(12px);
}
h1{font-size:36px;}
.heart{font-size:60px;animation:beat 1s infinite;}
@keyframes beat{50%{transform:scale(1.25);}}
.badge{
  display:inline-block;
  margin:6px;
  padding:8px 14px;
  border-radius:20px;
  background:white;
  color:#ff4b7d;
  font-weight:bold;
}
.status{
  margin-top:20px;
  padding:12px;
  border-radius:15px;
  background:#00c853;
}
</style>
</head>
<body>
  <div class="card">
    <div class="heart">❤️</div>
    <h1>${data.message}</h1>
    <h2>${data.couple}</h2>
    <p>Real-time DevOps Love App</p>
    ${data.tech.map(t => `<span class="badge">${t}</span>`).join("")}
    <div class="status">✅ ${data.status}</div>
  </div>
</body>
</html>
`);
}).listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
