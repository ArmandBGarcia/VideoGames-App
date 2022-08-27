require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const API_KEY = process.env.API_KEY;

const getVideogamesApi = async () => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  const response = await axios.get(url);

  return response.data;
};

function getVideogameByName(game) {
  const url = `https://api.rawg.io/api/games?search=${game}&key=${API_KEY}&page_size=15`;
  const response = axios
    .get(url)
    .then((resp) => {
      const games = resp.data.results.map((d) => d.name);
      return games.length ? games : "the game was not found";
    })
    .catch((error) => console.log(error));

  return response;
}

module.exports = {
  getVideogamesApi,
  getVideogameByName,
};
