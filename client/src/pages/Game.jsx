import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameById } from "../redux/actions";
import s from "./styles/Game.module.css";

const Game = () => {
  const state = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameById(id));
  }, [dispatch, id]);

  // console.log({ state });

  return (
    <div className={s.container}>
      {state.map((data) => (
        <div className={s.card}>
          <div>
            <img src={data.image} alt={data.name} className={s.image} />
          </div>
          <div>
            <h4>{data.name}</h4>
            <p>Relased date: {data.released}</p>
            <p>Rating: {data.rating}</p>
            <p>Platforms: {data.platforms}</p>
            <p>Description: {data.description}</p>
          </div>
          <div>
            {data.genres?.map((g) => (g.name ? <p>{g.name}</p> : <p>{g}</p>))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Game;
