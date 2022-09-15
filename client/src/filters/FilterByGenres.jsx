import React from "react";
import { useDispatch } from "react-redux";
import { getVideogames, filterByGenre } from "../redux/actions";
import s from "./styles/Genres.module.css";

const FilterByGenres = () => {
  const dispatch = useDispatch();

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
              <a href="#">
                <div className={s.contBtn}>
                  <button className={s.btn2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm0 4.5A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm15-.75A.75.75 0 0118 9v10.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V9a.75.75 0 01.75-.75zm-15 5.25a.75.75 0 01.75-.75h9.75a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className={s.lastSpan}>More...</span>
                </div>
              </a>
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
                {/* <li>
                  <div className={s.contBtn}>
                    <button
                      className={s.btn}
                      onClick={() => dispatch(getVideogames())}
                    >
                      <ion-icon name="apps"></ion-icon>
                    </button>
                    <span>All</span>
                  </div>
                </li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilterByGenres;
