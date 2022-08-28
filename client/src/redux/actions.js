import axios from "axios";
export const GET_GAMES = "GET_GAMES";

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
