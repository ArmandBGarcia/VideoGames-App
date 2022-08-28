import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../components/Aside";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import { getVideogames } from "../redux/actions";
import s from "./styles/Home.module.css";

const Home = () => {
  const games = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  // console.log(games);
  return (
    <div>
      <Navbar />
      <div className={s.container}>
        <Aside />
        <Cards games={games} />
      </div>
    </div>
  );
};

export default Home;
