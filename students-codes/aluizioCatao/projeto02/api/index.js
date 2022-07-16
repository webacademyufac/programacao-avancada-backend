const http = require("http");
const data = require("./url.json");
const URL = require("url");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });

    const { name, url, del } = URL.parse(req.url, true).query;

    function writeFile(cb) {
      fs.writeFile(
        path.join(__dirname, "url.json"),
        JSON.stringify(data, null, 2),
        (err) => {
          if (err) throw err;
          cb("Operacao realizada com sucesso!");
        }
      );
    }

    if (!name || !url) {
      res.end(JSON.stringify(data));
    }

    if (del) {
      data.urls = data.urls.filter((item) => item.url != url);

      return writeFile((message) => res.end(message));
    }

    data.urls.push({ name, url });
    return writeFile((message) => res.end(message));
  })
  .listen(3000, () => console.log("API is running"));

// Para Testes
// URL para retorno SHOW: http://localhost:3000/index.js
// URL para retorno CREATE: http://localhost:3000/index.js?name=google&url=www.google.com.br
// URL para retorno DELETE: http://localhost:3000/index.js?name=google&url=www.google.com.br&del=1
