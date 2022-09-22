import React from "react";
import { Link } from "react-router-dom";
import SearchByName from "../filters/SearchByName";
import image from "../images/armando.jpg";
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
        <Link to="/contact" className={s.link}>
          {/* <p className={s.contact}>
            <ion-icon name="person-circle-outline"></ion-icon>
          </p> */}
          <input
            className={s.btnContact}
            type="image"
            src={image}
            alt="contact me"
            width="45px"
            title="Contact Me"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
