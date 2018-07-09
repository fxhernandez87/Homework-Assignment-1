const http = require('http');
const url = require('url');
const config = {
  port: 3000
};

const server = http.createServer((req, res) => {
  // Get the parsedUrl from the request URL
  const { pathname } = url.parse(req.url, true);

  const path = pathname.replace(/^\/+|\/+$/g, '');

  const method = req.method.toUpperCase();

  const isValid = path === 'hello' && method === 'POST';

  const response = {
    message: isValid ? 'Welcome to my public repo!' : 'action not found',
    statusCode: isValid ? 200 : 404
  };
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(response.statusCode);
  res.end(JSON.stringify(response));
});


server.listen(config.port, () => {
  console.log(`server is listening to port ${config.port}`);
});
