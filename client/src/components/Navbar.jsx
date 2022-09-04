import React from "react";
import SearchByName from "../filters/SearchByName";
import s from "./style/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={s.container}>
      <nav className={s.navbar}>
        <p className={s.title}>Videogames App</p>
        <SearchByName />
      </nav>
    </header>
  );
};

export default Navbar;
