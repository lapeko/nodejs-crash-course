const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    const file = await fs.readFile(path.join(__dirname, "public", "home.html"));
    res.writeHead(200, "Ok", { "Content-type": "text/html" });
    return res.end(file);
  }

  if (req.url === "/about") {
    const file = await fs.readFile(path.join(__dirname, "public", "about.html"));
    res.writeHead(200, "Ok", { "Content-type": "text/html" });
    return res.end(file);
  }

  if (req.url === "/users") {
    const users = [
      { name: "Bob Pupkins", age: 25 },
      { name: "Stiw Qwerty", age: 47 }
    ];
    res.writeHead(200, "Ok", { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));