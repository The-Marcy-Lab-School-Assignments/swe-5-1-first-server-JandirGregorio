const http = require('node:http');

const { pathname, searchParams } = new URL(url, 'http://localhost:8080');
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const timeStamp = new Date().toISOString();
  console.log(`${method} ${url} ${timeStamp}`);

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('Welcome to JServer!');
    return;
  }

  if (method === 'GET' && url === '/api/joke') {
    const responseBody = JSON.stringify( { setup: 'Why did the bycicle fall over?', punchline: 'Because it was two tired.'});
    res.writeHead(200, { 'content-type': 'application/json'});
    res.end(responseBody);
    return;
  }

  if (method === 'GET' && pathname === '/api/rollDie') {
    const quantity = parseInt(searchParams.get('quantity'));
    const randomArr = Array.from({ length: quantity > 0 ? quantity : 1}, () => Math.floor(Math.random() * 6) + 1);
    const responseBody = JSON.stringify({ rolls: randomArr});
    res.writeHead(200, { 'content-type': 'application/json'});
    res.end(responseBody);
    return;
  }
  
  res.writeHead(404, { 'content-type': 'application/json'});
  res.end(JSON.stringify({ error: 'Not found'}));
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});
