import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, filterByGenre } from "../redux/actions";
import s from "./styles/Genres.module.css";

const FilterByGenres = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  return (
    <div>
      <h4 className={s.title}>Filter by genre</h4>
      <div className={s.buttons}>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Strategy"))}
          >
            <ion-icon name="construct"></ion-icon>
          </button>
          <span>Strategy</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Action"))}
          >
            <ion-icon name="hammer"></ion-icon>
          </button>
          <span>Action</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Indie"))}
          >
            <ion-icon name="accessibility"></ion-icon>
          </button>
          <span>Indie</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("RPG"))}
          >
            <ion-icon name="game-controller"></ion-icon>
          </button>
          <span>RPG</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Adventure"))}
          >
            <ion-icon name="rocket"></ion-icon>
          </button>
          <span>Adventure</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Shooter"))}
          >
            <ion-icon name="disc"></ion-icon>
          </button>
          <span>Shooter</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Casual"))}
          >
            <ion-icon name="home"></ion-icon>
          </button>
          <span>Casual</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Simulation"))}
          >
            <ion-icon name="subway"></ion-icon>
          </button>
          <span>Simulation</span>
        </div>
        <div className={s.contBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(filterByGenre("Puzzle"))}
          >
            <ion-icon name="extension-puzzle"></ion-icon>
          </button>
          <span>Puzzle</span>
        </div>
        <nav className={s.menu}>
          <ul>
            <li>
              <a href="#">More</a>
              <ul>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Arcade"))}
                    >
                      {" "}
                      <ion-icon name="easel"></ion-icon>
                    </button>
                    <span>Arcade</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Racing"))}
                    >
                      <ion-icon name="car-sport"></ion-icon>
                    </button>
                    <span>Racing</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Platformer"))}
                    >
                      <ion-icon name="shapes"></ion-icon>
                    </button>
                    <span>Platformer</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() =>
                        dispatch(filterByGenre("Massively Multiplayer"))
                      }
                    >
                      <ion-icon name="person-add"></ion-icon>
                    </button>
                    <span>Massively Multiplayer</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Sports"))}
                    >
                      <ion-icon name="american-football"></ion-icon>
                    </button>
                    <span>Sports</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Fighting"))}
                    >
                      <ion-icon name="body"></ion-icon>
                    </button>
                    <span>Fighting</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Board Games"))}
                    >
                      <ion-icon name="dice"></ion-icon>
                    </button>
                    <span>Board Games</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Family"))}
                    >
                      <ion-icon name="happy"></ion-icon>
                    </button>
                    <span>Family</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Card"))}
                    >
                      <ion-icon name="documents"></ion-icon>
                    </button>
                    <span>Card</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(filterByGenre("Educational"))}
                    >
                      <ion-icon name="school"></ion-icon>
                    </button>
                    <span>Educational</span>
                  </div>
                </li>
                <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(getVideogames())}
                    >
                      <ion-icon name="apps"></ion-icon>
                    </button>
                    <span>All</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilterByGenres;
