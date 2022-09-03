const express = require("express");
const {
  getVideogamesApi,
  getVideogameByName,
  getGameById,
  createGame,
  getVideogamesDb,
  getAllGames,
} = require("./controller");
const server = express();

// server.get("/", (req, res) => {
//   res.json({ msg: "Everythig OK" });
// });

// server.get("/db", async (req, res) => {
//   try {
//     const game = await getVideogamesDb();
//     res.status(200).json(game);
//   } catch (error) {
//     res.status(400).json({ msg: "Upss, something went wrong" });
//   }
// });

server.get("/", (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      getVideogameByName(name).then((resp) => {
        return res.status(202).json(resp);
      });
    } else {
      getAllGames().then((resp) => {
        return res.status(200).json(resp);
      });
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
  const { released, name, image, rating, description, strs, genres } = req.body;

  console.log(req.body);
  try {
    // console.log(released, name, rating, description, strs);
    const platforms = strs.join(" ");
    const newgame = await createGame({
      released,
      name,
      image,
      rating,
      description,
      platforms,
      genres,
    });
    return res.status(200).json(newgame);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

module.exports = server;
