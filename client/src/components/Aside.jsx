import React from "react";
import FilterByGenres from "../filters/FilterByGenres";
import SortByName from "../filters/SortByName";
import s from "./style/Aside.module.css";

const Aside = () => {
  return (
    <div>
      <aside className={s.container}>
        <FilterByGenres />
        <SortByName />
        <p>filtrar por... </p>
      </aside>
    </div>
  );
};

export default Aside;
