const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
require("./config/prod")(app);

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
app.use(cors());
app.use(helmet());

// ROUTES
app.use("/posts", require("./routes/posts"));

// PROD SETUP
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is up and running on port", PORT));
