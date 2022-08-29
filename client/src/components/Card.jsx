import React from "react";
import s from "./style/Card.module.css";

const Card = ({ key, id, name, image, genres }) => {
  // console.log({ key });
  return (
    <div className={s.card}>
      {/* <p>{key}</p> */}
      <div className={s.image}>
        <img src={image} alt={name} />
      </div>
      <div>
        <h4>{name}</h4>
      </div>
      <div className={s.genres}>
        {genres?.map((g) => (
          <p>{g}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
