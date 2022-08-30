import React from "react";
import FilterByGenres from "../filters/FilterByGenres";
import SortApiOrDb from "../filters/SortApiOrDb";
import SortByName from "../filters/SortByName";
import s from "./style/Aside.module.css";

const Aside = () => {
  return (
    <div>
      <aside className={s.container}>
        <FilterByGenres />
        <br />
        <SortByName />
        <br />
        <SortApiOrDb />
      </aside>
    </div>
  );
};

export default Aside;
