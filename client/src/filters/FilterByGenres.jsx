import React from "react";
import { useDispatch } from "react-redux";
import { getVideogames, filterByGenre } from "../redux/actions";

const FilterByGenres = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Filter by genre</h4>
      <button onClick={() => dispatch(filterByGenre("Strategy"))}>
        Strategy
      </button>
      <button onClick={() => dispatch(filterByGenre("Action"))}>Action</button>
      <button onClick={() => dispatch(filterByGenre("Indie"))}>
        Indie
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("RPG"))}>RPG</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Adventure"))}>
        Adventure
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Shooter"))}>
        Shooter
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Casual"))}>Casual</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Simulation"))}>
        Simulation
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Puzzle"))}>Puzzle</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Arcade"))}>Arcade</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Racing"))}>Racing</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Platformer"))}>
        Platformer
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Massively Multiplayer"))}>
        Massively Multiplayer
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Sports"))}>Sports</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Fighting"))}>
        Fighting
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Board Games"))}>
        Board Games
      </button>{" "}
      <button onClick={() => dispatch(filterByGenre("Family"))}>Family</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Card"))}>Card</button>{" "}
      <button onClick={() => dispatch(filterByGenre("Educational"))}>
        Educational
      </button>{" "}
      <button onClick={() => dispatch(getVideogames())}>All</button>
    </div>
  );
};

export default FilterByGenres;
