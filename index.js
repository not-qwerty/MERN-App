const error = require('./middleware/error');
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

// DATABASE CONNECT
mongoose
  .connect(
    "mongodb+srv://max:Cm3h-JCEnGDqjWP@cluster0-zsw8p.mongodb.net/CHAT?retryWrites=true&w=majority",
    {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to the database"))
  .catch((err) =>
    console.error(`couldn't connect to the database`, err.message)
  );

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

// ROUTES
app.use("/api/posts", require("./routes/posts"));
app.use("/api/users", require("./routes/users"));

app.use(error);

// PROD SETUP
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is up and running on port", PORT));
