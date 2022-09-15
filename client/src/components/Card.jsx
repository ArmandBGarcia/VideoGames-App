import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./style/Card.module.css";
import { deleteVideogame } from "../redux/actions";

const Card = ({ key, id, name, image, genres, rating }) => {
  // console.log({ key });
  const dispatch = useDispatch();
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
      {id.length > 10 ? (
        <button onClick={() => dispatch(deleteVideogame(id))}>X</button>
      ) : null}
    </div>
  );
};

export default Card;
