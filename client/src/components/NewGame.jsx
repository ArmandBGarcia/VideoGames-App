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
            {form.strs?.slice(0, 4).map((d) => (
              <div key={d} className={s.contBtn}>
                <span>{d}</span>
                <button
                  name="strs"
                  className={s.btn}
                  onClick={() => deletePlatform(d)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
          <div className={s.contGenres}>
            <p className={s.colorTitle}>Genres: </p>
            {form.genres?.slice(0, 6).map((g) => (
              <div key={g} className={s.contBtn}>
                <span>{g}</span>
                <button
                  name="genres"
                  className={s.btn}
                  onClick={() => deleteGenre(g)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={s.contDesc}>
          <p className={s.colorTitle}>Description: </p>
          <p className={s.contDesc}>{form.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewGame;
