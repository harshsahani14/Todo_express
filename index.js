// Creating server
const express = require("express");
const server = express();

// Loads all enviroment variables in process.env obejct as properties of the object
require("dotenv").config();
const Port = process.env.PORT;

const dbConnect = require("./config/database");
const router = require("./routes/Todos");

// The server will fetch json data and load it in req.body
server.use(express.json());

// Starting the server at PORT
server.listen(Port, () => {
  console.log(`Server sucessfully at port ${Port}`);
});

// Database connection
dbConnect();

// Mount all the routes
server.use("/v1", router);

// Default route
server.get("/", (req, res) => {
  res.send("Home page");
});
