import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, sortByGenre } from "../redux/actions";

const SortByGenres = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Filter by genre</h4>
      <button onClick={() => dispatch(sortByGenre("Strategy"))}>
        Strategy
      </button>
      <button onClick={() => dispatch(sortByGenre("Action"))}>Action</button>
      <button onClick={() => dispatch(sortByGenre("Indie"))}>Indie</button>{" "}
      <button onClick={() => dispatch(sortByGenre("RPG"))}>RPG</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Adventure"))}>
        Adventure
      </button>{" "}
      <button onClick={() => dispatch(sortByGenre("Shooter"))}>Shooter</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Casual"))}>Casual</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Simulation"))}>
        Simulation
      </button>{" "}
      <button onClick={() => dispatch(sortByGenre("Puzzle"))}>Puzzle</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Arcade"))}>Arcade</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Racing"))}>Racing</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Platformer"))}>
        Platformer
      </button>{" "}
      <button onClick={() => dispatch(sortByGenre("Massively Multiplayer"))}>
        Massively Multiplayer
      </button>{" "}
      <button onClick={() => dispatch(sortByGenre("Sports"))}>Sports</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Fighting"))}>
        Fighting
      </button>{" "}
      <button onClick={() => dispatch(sortByGenre("Board Games"))}>
        Board Games
      </button>{" "}
      <button onClick={() => dispatch(sortByGenre("Family"))}>Family</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Card"))}>Card</button>{" "}
      <button onClick={() => dispatch(sortByGenre("Educational"))}>
        Educational
      </button>{" "}
      <button onClick={() => dispatch(getVideogames())}>All</button>
    </div>
  );
};

export default SortByGenres;
