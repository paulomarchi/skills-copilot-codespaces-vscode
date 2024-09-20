// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file. When a GET request is made to the root route, the server should respond with the contents of the comments.json file. If the comments.json file does not exist, the server should respond with a 404 status code. If any other route is requested, the server should respond with a 404 status code and an error message.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
