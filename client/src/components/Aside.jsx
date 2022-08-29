import React from "react";
import SortByGenres from "../filters/SortByGenres";
import s from "./style/Aside.module.css";

const Aside = () => {
  return (
    <div>
      <aside className={s.container}>
        <SortByGenres />
        <p>filtrar por... </p>
        <p>filtrar por... </p>
      </aside>
    </div>
  );
};

export default Aside;
