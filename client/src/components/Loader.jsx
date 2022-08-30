import React from "react";
import s from "./style/Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.ball}></div>
      <div className={s.ball}></div>
      <div className={s.ball}></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
