import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByGenre } from "../redux/actions";

const SortByGenres = () => {
  // const state = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(sortByGenre("Action"));
  //   console.log({ state });
  // }, [dispatch, state]);

  return (
    <div>
      <button onClick={() => dispatch(sortByGenre("Action"))}>
        SortByGenre
      </button>
    </div>
  );
};

export default SortByGenres;
