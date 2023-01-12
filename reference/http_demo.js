const http = require('http');

const port = 8000;

http.createServer((req, res) => {
  res.write('Ok');
  res.end();
}).listen(port, () => console.log(`Server is running on port ${port}`));