import React from "react";
import Card from "./Card";
import s from "./style/Card.module.css";

const Cards = ({ currentGames }) => {
  // let id = 0;
  // console.log({ games });
  return (
    <div className={s.cards}>
      {currentGames.map((g) => (
        <Card
          key={g.id}
          id={g.id}
          name={g.name}
          image={g.image}
          rating={g.rating}
          genres={g.genres.map((d) => (d.name ? d.name : d))}
          platforms={g.platforms}
        />
      ))}
    </div>
  );
};

export default Cards;
