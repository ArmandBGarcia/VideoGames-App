const express = require("express");
const { getVideogamesApi, getVideogameByName } = require("./controller");
const server = express();

// server.get("/", (req, res) => {
//   res.json({ msg: "Everythig OK" });
// });

server.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      getVideogameByName(name).then((resp) => {
        return res.status(202).json(resp);
      });
    } else {
      const videogames = await getVideogamesApi();
      res.status(202).json(videogames);
    }
  } catch (error) {
    res.status(404).json({ msg: "something went wrong", error });
  }
});

module.exports = server;
