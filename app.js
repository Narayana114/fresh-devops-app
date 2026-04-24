const http = require('http');
const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const requestCounter = new client.Counter({
  name: 'app_requests_total',
  help: 'Total number of requests'
});

const server = http.createServer((req, res) => {

  if (req.url === '/metrics') {
    res.writeHead(200, { 'Content-Type': client.register.contentType });
    res.end(client.register.metrics());
    return;
  }

  requestCounter.inc();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Love you ye pichamma ❤️');
});

server.listen(3000);
