const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://max:Cm3h-JCEnGDqjWP@cluster0-zsw8p.mongodb.net/CHAT?retryWrites=true&w=majority",
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => console.log("connected to the database"))
    .catch((err) =>
      console.error(`couldn't connect to the database`, err.message)
    );
};
