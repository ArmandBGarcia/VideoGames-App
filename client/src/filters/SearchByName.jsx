import React from "react";
import s from "./styles/SearchByName.module.css";

const SearchByName = () => {
  return (
    <div>
      <form className={s.searchBar}>
        <input
          className={s.input}
          type="text"
          placeholder="🔎 Search 787,351 games"
        />
        <button className={s.btn}>
          <ion-icon name="search-circle-outline"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default SearchByName;
