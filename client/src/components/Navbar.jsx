import React from "react";
import { Link } from "react-router-dom";
import SearchByName from "../filters/SearchByName";
import s from "./style/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={s.container}>
      <nav className={s.navbar}>
        <Link to="/" className={s.link}>
          <p className={s.videogame}>Videogames App</p>
        </Link>
        <SearchByName />
        <Link to="/about" className={s.link}>
          <p className={s.about}>About</p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
