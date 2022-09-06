import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameByName } from "../redux/actions";
import s from "./styles/SearchByName.module.css";

const SearchByName = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name === "") {
      alert("Please type a videogame name");
    }
    dispatch(getGameByName(name));
    setName("");
  };

  return (
    <div>
      <form
        className={s.searchBar}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={name}
          className={s.input}
          type="text"
          placeholder="🔎 Search 787,351 games"
          name="search"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="submit"
          className={s.btn}
        >
          <ion-icon name="search-circle-outline"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default SearchByName;
