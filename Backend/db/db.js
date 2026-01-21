const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

}

module.exports = connectToDb;  