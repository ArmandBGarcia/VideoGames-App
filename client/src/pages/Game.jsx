import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getGameById } from "../redux/actions";
import s from "./styles/Game.module.css";

const Game = () => {
  const state = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameById(id));
  }, [dispatch, id]);

  console.log({ state });

  return (
    <div className={s.container}>
      <Link to="/home">
        <button className={s.btn}>
          <ion-icon name="arrow-undo"></ion-icon>
        </button>
      </Link>
      {state.map((data) => (
        <div className={s.containerCard}>
          <div className={s.card}>
            <div>
              <img src={data.image} alt={data.name} className={s.image} />
            </div>
            <div className={s.info}>
              <h4 className={s.name}>{data.name}</h4>
              <div className={s.infoContainres}>
                <p className={s.nameColor}>Relased date: </p>
                <p>{data.released}</p>
              </div>
              <div className={s.infoContainres}>
                <p className={s.nameColor}>Rating: </p>
                <p>{data.rating}</p>
              </div>
              <div className={s.infoContainres}>
                <p className={s.nameColor}>Platforms: </p>
                <p>{data.platforms}</p>
              </div>
            </div>
            <div className={s.genres}>
              <h4 className={s.name}>Genres</h4>
              {data.genres?.map((g) => (g.name ? <p>{g.name}</p> : <p>{g}</p>))}
            </div>
          </div>
          <div className={s.description}>
            <div className={s.infoContainres}>
              <p className={s.nameColor}>Description: </p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Game;
