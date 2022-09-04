import React from "react";
import { Link } from "react-router-dom";
import s from "./style/Card.module.css";

const Card = ({ key, id, name, image, genres, rating }) => {
  // console.log({ key });
  return (
    <div className={s.card}>
      <Link to={`/game/${id}`} className={s.link}>
        <img src={image} alt={name} />
        <div>
          <h4 className={s.name}>{name}</h4>
        </div>
        <div className={s.genres}>
          {genres?.map((g) => (
            <p>{g}</p>
          ))}
        </div>
        <p className={s.rating}>{rating}</p>
      </Link>
    </div>
  );
};

export default Card;
