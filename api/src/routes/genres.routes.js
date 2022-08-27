const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.json({ msg: "Everything OK" });
});

module.exports = server;
