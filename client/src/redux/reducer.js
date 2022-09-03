import {
  CREATE_GAME,
  FILTER_BY_GENRE,
  GET_GAMES,
  GET_GAMES_BY_NAME,
  GET_GAME_API,
  GET_GAME_BY_ID,
  GET_GAME_CREATED,
  GET_GENRES,
  SORT_BY_NAME,
} from "./actions";

const initialState = {
  videogames: [],
  gameDetail: [],
  genres: [],
  newGame: {},
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
    case GET_GAME_CREATED:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_GAME_API:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_GAME_BY_ID:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case CREATE_GAME:
      // if (action.payload.error) {
      //   alert(action.payload.error);
      //   return state;
      // }
      return {
        ...state,
        newGame: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
