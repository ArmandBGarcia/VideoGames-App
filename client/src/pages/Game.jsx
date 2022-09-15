import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import { getGameById } from "../redux/actions";
import s from "../components/style/Game.module.css";

const Game = () => {
  const game = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameById(id));
  }, [dispatch, id]);

  // console.log({ game });
  return (
    <div>
      <Link to="/home">
        <button className={s.btn}>
          <ion-icon name="arrow-undo"></ion-icon>
        </button>
      </Link>
      {game.hasOwnProperty("name") || game.length ? (
        <Detail game={game} id={id} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Game;
