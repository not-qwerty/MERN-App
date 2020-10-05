const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const WebSocket = require('ws');
const http = require('http');

require('dotenv').config()

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, port: 3030 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})

app.use(helmet())
  .use(express.json())
  .use(cookieParser())
  .use(cors());

require("./db/index")();
require("./routes/routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

module.exports = app;
