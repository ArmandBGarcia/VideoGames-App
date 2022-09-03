import React from "react";
import s from "./style/NewGame.module.css";

const NewGame = ({ form, deleteGenre, deletePlatform }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{form.name}</h1>
      <div className={s.card}>
        <div className={s.subCard}>
          <div>
            <img className={s.image} src={form.image} alt={form.name} />
          </div>
          <div className={s.contInfo}>
            <div>
              <p className={s.colorTitle}>Release date: </p>
              <p>{form.released}</p>
            </div>
            <div>
              <p className={s.colorTitle}>Rating: </p>
              <p>{form.rating}</p>
            </div>
            <p className={s.colorTitle}>Platforms: </p>
            {form.strs.map((d) => (
              <div key={d} className={s.contBtn}>
                <span>{d}</span>
                <button className={s.btn} onClick={() => deletePlatform(d)}>
                  ❌
                </button>
              </div>
            ))}
          </div>
          <div className={s.contGenres}>
            <p className={s.colorTitle}>Genres: </p>
            {form.genres?.map((d) => (
              <div key={d} className={s.contBtn}>
                <span>{d}</span>
                <button className={s.btn} onClick={() => deleteGenre(d)}>
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={s.contDesc}>
          <p className={s.colorTitle}>Description: </p>
          <p>{form.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewGame;
