import React from "react";
import { Link } from "react-router-dom";
import FilterByGenres from "../filters/FilterByGenres";
import SortApiOrDb from "../filters/SortApiOrDb";
import SortByName from "../filters/SortByName";
import SortByRating from "../filters/SortByRating";
import s from "./style/Aside.module.css";
const Aside = () => {
  return (
    <div>
      <aside className={s.container}>
        <div className={s.containerLink}>
          <Link to="/form" className={s.link}>
            <h3 className={s.title}>create you own game!!!</h3>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <FilterByGenres />
        <br />
        <SortApiOrDb />
        <br />
        <SortByRating />
        <br />
        <SortByName />
      </aside>
    </div>
  );
};

export default Aside;
