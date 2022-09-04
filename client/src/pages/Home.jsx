import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../components/Aside";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { Paginated } from "../components/Paginated";
import { getVideogames } from "../redux/actions";
import s from "./styles/Home.module.css";

const Home = () => {
  const games = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames =
    games.length >= 1
      ? games.slice(indexOfFirstGame, indexOfLastGame)
      : [games];

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  // console.log(games);
  return (
    <div>
      <Navbar />
      <Paginated
        gamesPerPage={gamesPerPage}
        allGames={games.length}
        pagination={pagination}
      />
      <div className={s.container}>
        <Aside />
        {games.length ? <Cards currentGames={currentGames} /> : <Loader />}
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default Home;
