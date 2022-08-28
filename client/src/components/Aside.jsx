import React from "react";
import s from "./style/Aside.module.css";

const Aside = () => {
  return (
    <div>
      <aside className={s.container}>
        <p>filtrar por... </p>
        <p>filtrar por... </p>
        <p>filtrar por... </p>
      </aside>
    </div>
  );
};

export default Aside;
