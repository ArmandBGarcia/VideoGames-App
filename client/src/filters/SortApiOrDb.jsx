import React from "react";
import { useDispatch } from "react-redux";
import { filterByDb, filterByApi, getVideogames } from "../redux/actions";

const SortApiOrDb = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Filter by DB or API</h4>
      <button onClick={() => dispatch(filterByDb())}>DB</button>
      <br />
      <button onClick={() => dispatch(filterByApi())}>API</button>
      <br />
      <button onClick={() => dispatch(getVideogames())}>ALL</button>
    </div>
  );
};

export default SortApiOrDb;
