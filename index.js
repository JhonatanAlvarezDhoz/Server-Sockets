const express = require("express");
const { resolve } = require("path");
require("dotenv").config();

//APP Express
const app = express();

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");

const pathPublic = resolve(__dirname, "public");
app.use(express.static(pathPublic));

const { PORT } = process.env;

server.listen(PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running in port", PORT);
});
