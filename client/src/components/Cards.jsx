import React from "react";
import Card from "./Card";
import s from "./style/Card.module.css";

const Cards = ({ games }) => {
  let id = 0;
  console.log({ games });
  return (
    <div className={s.cards}>
      {games.map((g) => (
        <Card
          key={id}
          id={g.id}
          name={g.name}
          image={g.image}
          genres={g.genres.map((d) => d)}
        />
      ))}
    </div>
  );
};

export default Cards;
