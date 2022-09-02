require("dotenv").config();
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const API_KEY = process.env.API_KEY;
let containerMaster = [];
let arrayGenres = [];

const getVideogamesApi = async () => {
  if (!containerMaster.length) {
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`;
    const response = await axios.get(url);
    const response2 = await axios.get(response.data.next);
    const response3 = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`
    );

    const result1 = response.data.results.map((data) => {
      return {
        id: data.id,
        name: data.name,
        image: data.background_image,
        genres: data.genres.map((g) => g.name),
      };
    });

    const result2 = response2.data.results.map((data) => {
      return {
        id: data.id,
        name: data.name,
        image: data.background_image,
        genres: data.genres.map((g) => g.name),
      };
    });

    const result3 = response3.data.results.map((data) => {
      return {
        id: data.id,
        name: data.name,
        image: data.background_image,
        genres: data.genres.map((g) => g.name),
      };
    });

    containerMaster = [...result1, ...result2, ...result3];
    return containerMaster;
  } else {
    return containerMaster;
  }
};

const getVideogamesDb = async () => {
  const game = await Videogame.findAll({
    include: {
      model: Genre,
      attribute: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return game.length ? game : game;
};

// function getAllGames() {
//   const apiGames = getVideogamesApi()
//     .then((resp) => {
//       return resp;
//     })
//     .catch((error) => console.log(error));
//   const dbGames = getVideogamesDb()
//     .then((resp) => {
//       return resp;
//     })
//     .catch((error) => console.log(error));
//   const allGames = [...apiGames, dbGames];
//   return allGames;
// }

const getAllGames = async () => {
  const apiGames = await getVideogamesApi();
  const dbGames = await getVideogamesDb();
  const allGames = [...dbGames, ...apiGames];
  return allGames;
};

function getVideogameByName(game) {
  const url = `https://api.rawg.io/api/games?search=${game}&key=${API_KEY}&page_size=15`;
  const response = axios
    .get(url)
    .then((resp) => {
      const games = resp.data.results.map((d) => {
        return {
          id: d.id,
          name: d.name,
          image: d.background_image,
          genres: d.genres.map((d) => d.name),
        };
      });
      // easy to read this line
      // console.log(games.length);
      return games.length ? games : "the game was not found";
    })
    .catch((error) => console.log(error));

  return response;
}

const getGameById = async (id) => {
  if (id.length > 10) {
    const game = await Videogame.findAll({
      where: {
        id,
      },
      include: {
        model: Genre,
        attribute: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return game;
  } else {
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
        platforms: response.data.platforms
          .map((d) => d.platform.name)
          .join(", "),
        description: response.data.description_raw,
      };
      // return response.data;
      return game;
    } catch (error) {
      throw "check your code, something went wrong";
    }
  }
};

function getGenres() {
  if (!arrayGenres.length) {
    const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;
    const result = axios
      .get(url)
      .then((resp) => {
        const genres = resp.data.results.map((data) => data.name.toLowerCase());
        // console.log(genres);
        return genres;
      })
      .then((resp) => {
        resp.map((data) => {
          Genre.findOrCreate({
            where: {
              name: data,
            },
          });
        });
        return Genre.findAll().then((data) => {
          arrayGenres = [...data];
          return arrayGenres;
        });
      })
      .catch((error) => console.log(error));
    // console.log("trido de la API");
    return result;
  } else {
    // console.log("traido de la  DB");
    return arrayGenres;
  }
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
  getVideogamesDb,
  getAllGames,
};
