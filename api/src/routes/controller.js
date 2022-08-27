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
      const games = resp.data.results.map((d) => {
        return {
          id: d.name,
          name: d.name,
          image: d.background_image,
          genres: d.genres.map((d) => d.name),
        };
      });
      return games.length ? games : "the game was not found";
    })
    .catch((error) => console.log(error));

  return response;
}

const getGameById = async (id) => {
  const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const game = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.background_image,
      genres: response.data.genres.map((d) => d.name),
      released: response.data.released,
      rating: response.data.rating,
      platforms: response.data.platforms.map((d) => d.platform.name),
    };
    // return response.data;
    return game;
  } catch (error) {
    throw "check your code, something went wrong";
  }
};

function getGenres() {
  const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;
  const result = axios
    .get(url)
    .then((resp) => {
      const genres = resp.data.results.map((data) => data.name.toLowerCase());
      // console.log(genres);
      return genres;
    })
    .then((genres) => {
      genres.map((data) => {
        Genre.findOrCreate({
          where: {
            name: data,
          },
        });
      });
      return "data created succesfuly";
    })
    .catch((error) => console.log(error));
  return result;
}

const createGame = async (obj) => {
  const { genres, name, description, platforms } = obj;
  if (!name || !description || !platforms || !genres.length)
    throw "Missing data required to crate a new game";
  // I map the array of genres and i search in the DB each one of the names and I save the result in a variable
  let genresDb = genres.map((genre) => {
    genre = genre.toLowerCase();
    return Genre.findAll({
      where: {
        name: genre,
      },
    });
  });
  // I reassign the value of genresDb to the result of waitting for the resolution of all the promise of the before map
  genresDb = await Promise.all(genresDb);
  //Promise.all return an array for each promise and I need the data together so I use the default function .flat() of the arrays that returnme an only array without depth
  genresDb = genresDb.flat();
  /// I map the array of genres and extract the id that I need for relation the genres to the videogames created - I reassign the variable again

  const idGenres = genresDb.map((g) => g.id);
  const newGame = await Videogame.create(obj);
  console.log(idGenres);

  newGame.addGenre(idGenres);

  return { msg: "Videogame created succesfully!!", newGame };
};

module.exports = {
  getVideogamesApi,
  getVideogameByName,
  getGameById,
  getGenres,
  createGame,
};
