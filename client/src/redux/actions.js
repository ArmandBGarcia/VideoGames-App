import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const SORT_BY_GENRE = "SORT_BY_GENRE";

export const getVideogames = () => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
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
      .then((resp) => resp.data)
      .then((json) => {
        dispatch({
          type: GET_GAMES_BY_NAME,
          payload: json,
        });
      })
      .catch((e) => console.log(e));
  };
}

export const sortByGenre = (genre) => {
  const url = "http://localhost:3001/videogames";
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      const game = response.data.genres.map((genre) => genre.name);
      console.log({ game });
    } catch (error) {
      return alert("genre not found");
    }
  };
};
