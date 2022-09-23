import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/About.module.css";

const About = () => {
  return (
    <div className={s.container}>
      <Link to="/home">
        <button className={s.btn}>
          <ion-icon name="arrow-undo"></ion-icon>
        </button>
      </Link>
      <h1 className={s.title}>Videogames App</h1>
      <div className={s.text}>
        <p>
          This application web page was made with <strong>JavaScript</strong>,{" "}
          <strong>CSS pure</strong>, <strong>React-components</strong> and{" "}
          <strong>Redux</strong> on the front-end side.
        </p>
        <p>
          For the back-end were used <strong>NodeJs</strong> and{" "}
          <strong>Express</strong> connected to Data Base{" "}
          <strong>Postgres</strong> through <strong>Sequelize</strong>.
        </p>
        <br />
        <p className={s.description}>
          The function of this web application is to connect to the RAWG
          database of video games, then get only the data I need and store it in
          one of my back routes, the front connects to the back routes and
          obtains the information for show it on screen.
        </p>
        <br />
        <p className={s.description}>
          In the video game creation route we are accessing a back route that in
          turn accesses the database, obtains the information from the front-end
          and saves it in the database.
        </p>
        <br />
        <p className={s.description}>
          The CRUD of the database was implemented to be able to read the
          information of the video games, create new games, update them and
          delete them
        </p>
        <br />
        <p className={s.description}>
          Everything is connected and working at the same time, the front-end
          receives and sends information to the back-end, the back-end sends
          information to the front-end and to the database, and makes requests
          to the external API, in turn the front-end end makes requests to our
          back-end, and so all the technologies flow as a whole.
        </p>
      </div>
    </div>
  );
};

export default About;
