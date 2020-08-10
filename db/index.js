const mongoose = require("mongoose");


module.exports = function () {
  mongoose
    .connect(
      process.env.MONGO_URI,
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
