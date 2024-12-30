const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle request here, include robust error handling
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
