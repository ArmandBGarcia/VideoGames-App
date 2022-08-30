import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getGameById } from "../redux/actions";
import s from "./styles/Game.module.css";

const Game = () => {
  const game = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameById(id));
  }, [dispatch, id]);

  console.log({ game });

  return !game.length ? (
    <div className={s.container}>
      <div className={s.title}>
        <Link to="/home">
          <button className={s.btn}>
            <ion-icon name="arrow-undo"></ion-icon>
          </button>
        </Link>
        <h4 className={s.titleName}>{game.name}</h4>
      </div>

      <div className={s.containerCard}>
        <div className={s.card}>
          <div>
            <img src={game.image} alt={game.name} className={s.image} />
          </div>
          <div className={s.info}>
            <div>
              <p className={s.nameColor}>Relased date: </p>
              <p className={s.date}>{game.released}</p>
            </div>
            <div className={s.infoContainres}>
              <p className={s.nameColor}>Rating: </p>
              <p>{game.rating}</p>
            </div>
            <div>
              <p className={s.nameColor}>Platforms: </p>
              <p className={s.platforms}>{game.platforms}</p>
            </div>
          </div>
          <div className={s.genres}>
            <h4 className={s.name}>Genres</h4>
            {game.genres?.map((g) => (g.name ? <p>{g.name}</p> : <p>{g}</p>))}
          </div>
        </div>
        <div className={s.description}>
          <div className={s.infoContainres}>
            <p>
              <span className={s.nameColor}>Description: </span>
              {game.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={s.container}>
      {game.map((game) => (
        <div>
          <div className={s.title}>
            <Link to="/home">
              <button className={s.btn}>
                <ion-icon name="arrow-undo"></ion-icon>
              </button>
            </Link>

            <h4 className={s.titleName}>{game.name}</h4>
          </div>

          <div className={s.containerCard}>
            <div className={s.card}>
              <div>
                <img src={game.image} alt={game.name} className={s.image} />
              </div>
              <div className={s.info}>
                <div className={s.infoContainres}>
                  <p className={s.nameColor}>Relased date: </p>
                  <p className={s.date}>{game.released}</p>
                </div>
                <div className={s.infoContainres}>
                  <p className={s.nameColor}>Rating: </p>
                  <p>{game.rating}</p>
                </div>
                <div>
                  <p className={s.nameColor}>Platforms: </p>
                  <p className={s.platforms}>{game.platforms}</p>
                </div>
              </div>
              <div className={s.genres}>
                <h4 className={s.name}>Genres</h4>
                {game.genres?.map((g) =>
                  g.name ? <p>{g.name}</p> : <p>{g}</p>
                )}
              </div>
            </div>
            <div className={s.description}>
              <div className={s.infoContainres}>
                <p>
                  <span className={s.nameColor}>Description: </span>
                  {game.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Game;
