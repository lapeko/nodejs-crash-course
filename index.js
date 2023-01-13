const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {
  try {
    const file = await fs.readFile(path.join(__dirname, "public", req.url === '/' ? "index.html" : req.url), { encoding: "utf-8" });
    const extension = path.extname(req.url);
    let contentType = "text/html";
    switch (extension) {
      case ".js": contentType = "text/javascript"; break;
      case ".css": contentType = "text/css"; break;
      case ".json": contentType = "application/json"; break;
      case ".png": contentType = "image/png"; break;
      case ".jpg": contentType = "image/jpg"; break;
    }
    res.writeHead(200, "Ok", { "Content-type": contentType })
    res.end(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, "Not found", { "Content-type": "text/html" });
      const file = await fs.readFile(path.join(__dirname, "public", "not-found.html"));
      return res.end(file);
    }
    res.writeHead(500, "Server error", { "Content-type": "text/html" });
    const file = await fs.readFile(path.join(__dirname, "public", "server-error.html"));
    res.end(file);
  }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));