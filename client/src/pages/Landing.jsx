import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={s.container}>
      <Link to="/home">
        <button className={s.btn}>
          <ion-icon name="enter-outline"></ion-icon>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
