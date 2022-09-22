import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./style/Card.module.css";
import { deleteVideogame } from "../redux/actions";

const Card = ({ key, id, name, image, genres, rating, platforms }) => {
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
          {genres?.splice(0, 3).map((g) => (
            <p>{g}</p>
          ))}
        </div>
        {/* <div>
          {platforms?.splice(0, 3).map((p) => (
            <p>{p}</p>
          ))}
        </div> */}
        <p className={s.rating}>{rating}</p>
      </Link>
      {id.length > 10 ? (
        <button className={s.btn} onClick={() => dispatch(deleteVideogame(id))}>
          <ion-icon name="trash"></ion-icon>
        </button>
      ) : null}
    </div>
  );
};

export default Card;
