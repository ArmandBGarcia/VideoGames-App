const express = require("express");
const {
  getVideogamesApi,
  getVideogameByName,
  getGameById,
  createGame,
} = require("./controller");
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

server.get("/:id", (req, res) => {
  const { id } = req.params;
  getGameById(id)
    .then((resp) => {
      res.status(202).json(resp);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

server.post("/", async (req, res) => {
  try {
    await createGame(req.body);
    res.status(200).send("Game crated succesfuly");
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong", error });
  }
});

module.exports = server;
