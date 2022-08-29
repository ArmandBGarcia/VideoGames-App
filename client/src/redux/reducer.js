import {
  FILTER_BY_GENRE,
  GET_GAMES,
  GET_GAMES_BY_NAME,
  SORT_BY_NAME,
} from "./actions";

const initialState = {
  videogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_GAMES_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case FILTER_BY_GENRE:
      return {
        ...state,
        videogames: action.payload,
      };
    case SORT_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
