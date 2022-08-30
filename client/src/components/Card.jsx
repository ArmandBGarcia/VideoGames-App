import React from "react";
import { Link } from "react-router-dom";
import s from "./style/Card.module.css";

const Card = ({ key, id, name, image, genres }) => {
  // console.log({ key });
  return (
    <div className={s.card}>
      {/* <p>{key}</p> */}
      <Link to={`/game/${id}`} className={s.image}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
        </div>
        <div className={s.genres}>
          {genres?.map((g) => (
            <p>{g}</p>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Card;
