const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");


const app = express();
const http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

require("./db/index")();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors());

require("./routes/routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => console.log("server is up and running on port", PORT));
