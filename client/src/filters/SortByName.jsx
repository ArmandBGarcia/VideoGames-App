import React from "react";
import { sortByName } from "../redux/actions";
import { useDispatch } from "react-redux";

const SortByName = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Sort Alphabetically</h4>
      <button onClick={() => dispatch(sortByName("AZ"))}>AZ</button>
      <button onClick={() => dispatch(sortByName("ZA"))}>ZA</button>
      <button onClick={() => dispatch(sortByName("ALL"))}>Normal</button>
    </div>
  );
};

export default SortByName;
