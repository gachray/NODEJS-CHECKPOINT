//TASK 02 - NODE.JS CHECKPOINT

//require http module
const http = require('http');

//create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

//start the server listening on port 3000, and log a message to the console to indicate that the server is running.
server.listen(3000, () => {
  console.log('Server running on port 3000');
});