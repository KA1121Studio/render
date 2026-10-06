const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>Node.jsテスト</title>
    </head>
    <body>
      <h1>Hello Node.js!</h1>
      <p>Render!!</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
