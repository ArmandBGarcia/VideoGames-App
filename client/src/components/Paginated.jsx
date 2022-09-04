import React from "react";
import s from "./style/Paginated.module.css";

export const Paginated = ({ gamesPerPage, allGames, pagination }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={s.contMaster}>
      <div className={s.container}>
        {pageNumber &&
          pageNumber.map((a) => {
            return (
              <div key={a}>
                <button
                  className={s.btn}
                  onClick={() => pagination(a)}
                  href="number page"
                >
                  {a}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
