import React from "react";
import { useDispatch } from "react-redux";
import { getVideogames, sortByRating } from "../redux/actions";

const SortByRating = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Sort by rating</h4>
      <button onClick={() => dispatch(sortByRating("asc"))}>Asc</button>
      <button onClick={() => dispatch(sortByRating("desc"))}>Desc</button>
      <button onClick={() => dispatch(getVideogames())}>Normal</button>
    </div>
  );
};

export default SortByRating;
