import React from "react";
import { sortByName } from "../redux/actions";
import { useDispatch } from "react-redux";

const SortByName = () => {
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => dispatch(sortByName("AZ"))}>AZ</button>
      <button onClick={() => dispatch(sortByName("ZA"))}>ZA</button>
      <button onClick={() => dispatch(sortByName("ALL"))}>ALL</button>
    </form>
  );
};

export default SortByName;
