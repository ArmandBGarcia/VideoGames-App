import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const GET_GAME_CREATED = "GET_GAME_CREATED";
export const GET_GAME_API = "GET_GAME_API";
export const GET_GAME_BY_ID = "GET_GAME_BY_ID";
export const GET_GENRES = "GET_GENRES";
export const CREATE_GAME = "CREATE_GAME";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const UPDATE_GAME = "UPDATE_GAME";
export const DELETE_GAME = "DELETE_GAME";

export const getVideogames = () => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      console.log({ response });
      return dispatch({
        type: GET_GAMES,
        payload: response.data,
      });
    } catch (error) {
      return alert("the data could not be processed");
    }
  };
};

export function getGameByName(name) {
  const url = `http://localhost:3001/videogames?name=${name}`;
  return (dispatch) => {
    axios(url)
      .then((resp) => (resp.data ? resp.data : alert("no one game found")))
      .then((json) => {
        // console.log("x", json);
        dispatch({
          type: GET_GAMES_BY_NAME,
          payload: json,
        });
      })
      .catch((e) => console.log(e));
  };
}

export const filterByGenre = (genre) => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      console.log("response", response.data);
      const game = response.data.filter(
        (d) => d.genres.filter((g) => g === genre.toLowerCase()).length
      );
      // console.log({ game });
      if (game.length) {
        dispatch({
          type: FILTER_BY_GENRE,
          payload: game,
        });
      } else return alert(`No one game found with genre: ${genre}`);
    } catch (error) {
      return alert("genre not found");
    }
  };
};

export const sortByName = (value) => {
  const url = "http://localhost:3001/videogames";
  return function (dispatch) {
    axios
      .get(url)
      .then((resp) => {
        return resp.data;
      })
      .then((games) => {
        if (value === "AZ") {
          const AZ = games.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          // console.log({ AZ });
          dispatch({ type: SORT_BY_NAME, payload: AZ });
        } else if (value === "ZA") {
          const ZA = games.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          // console.log({ ZA });
          dispatch({ type: SORT_BY_NAME, payload: ZA });
        } else {
          // console.log({ games });
          dispatch({ type: SORT_BY_NAME, payload: games });
        }
      })
      .catch((e) => alert("Sorry, there was a problem"));
  };
};

export const sortByRating = (value) => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      const rating = response.data;
      console.log({ rating });
      if (value === "asc") {
        const sorted = rating.sort((a, b) => {
          return a.rating - b.rating;
        });
        dispatch({ type: SORT_BY_RATING, payload: sorted });
      } else if ((value = "desc")) {
        const sorted = rating.sort((a, b) => {
          return b.rating - a.rating;
        });
        dispatch({ type: SORT_BY_RATING, payload: sorted });
      }
    } catch (error) {
      alert(error);
    }
  };
};

export const filterByDb = () => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      const gameDb = response.data.filter((game) =>
        game.id.toString().includes("-")
      );
      // console.log({ gameDb });
      if (gameDb.length) {
        dispatch({
          type: GET_GAME_CREATED,
          payload: gameDb,
        });
      } else {
        return alert("No one game created");
      }
    } catch (error) {
      alert("No games created");
    }
  };
};

export const filterByApi = () => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      const gameDb = response.data.filter(
        (game) => !game.id.toString().includes("-")
      );
      // console.log({ gameDb });
      dispatch({
        type: GET_GAME_API,
        payload: gameDb,
      });
    } catch (error) {
      alert("Something went wrong");
    }
  };
};

export const getGameById = (id) => {
  const url = `http://localhost:3001/videogames/${id}`;
  return function (dispatch) {
    axios
      .get(url)
      .then((json) => {
        // console.log(json.data);
        dispatch({
          type: GET_GAME_BY_ID,
          payload: json.data,
        });
      })
      .catch((e) => alert("Something went wrong"));
  };
};

export const getGenres = () => {
  const url = "http://localhost:3001/genres";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      dispatch({
        type: GET_GENRES,
        payload: response.data,
      });
    } catch (error) {
      alert("The data couldn't been processed");
    }
  };
};

export const createGame = (obj) => {
  const url = "http://localhost:3001/videogames";
  return function (dispatch) {
    console.log(obj.name);
    axios
      .post(url, obj)
      .then((json) => {
        dispatch({
          type: CREATE_GAME,
          payload: json.data,
        });
        alert(json.data);
      })
      .catch((error) => {
        return alert("Please, send the information correctly");
      });
  };
};

export const updateVideogame = (id, obj) => {
  const url = `http://localhost:3001/videogames/${id}`;
  const options = {
    method: "PUT",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(obj),
  };
  return async function (dispatch) {
    return await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: UPDATE_GAME, payload: data });
        // alert(data);
      });
  };
};

export const deleteVideogame = (id) => {
  const url = `http://localhost:3001/videogames/delete/${id}`;
  return async function (dispatch) {
    const response = await axios.delete(url);
    console.log("this is", response.data);
    dispatch({
      type: DELETE_GAME,
      payload: id,
    });
    alert(response.data);
  };
};
