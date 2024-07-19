const mongoose = require("mongoose");

require("dotenv").config();

function dbConnect() {
  mongoose
    .connect(process.env.DATABASE_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection sucessful"))
    .catch((err) => console.log("Database connection failed"));
}

module.exports = dbConnect;
