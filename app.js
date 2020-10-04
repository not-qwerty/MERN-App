const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

require('dotenv').config()

const app = express();
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
