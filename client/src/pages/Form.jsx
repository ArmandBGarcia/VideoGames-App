import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import platforms from "../helpers/platforms.js";
import { getGenres } from "../redux/actions.js";
import s from "./styles/Form.module.css";

const validate = (game) => {
  let error = {};
  let regex = {
    onlyNumbers: /^([0-9])*$/,
    float: /^[0-9]+([,.][0-9]+)?$/,
    onlyLetters: /^[a-zA-Z_ -]+$/,
    date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  };

  if (!game.rating) {
    error.rating = "rating is required!";
  } else if (!regex.float.test(game.rating)) {
    error.rating = "only numbers please!";
  } else if (game.rating < 1 || game.rating > 10) {
    error.rating = "rating must be between 1 or 10!";
  }

  if (!game.released) {
    error.released = "released is required!";
  } else if (regex.date.test(game.released)) {
    error.released = "invalid date!";
  }

  if (!game.name) {
    error.name = "name is required!";
  } else if (!regex.onlyLetters.test(game.name)) {
    error.name = "invalid name!";
  } else if (game.name.length > 20) {
    error.name = "the name must have max 20 characters";
  }

  if (!game.description) {
    error.description = "Description is required";
  } else if (!regex.onlyLetters.test(game.description)) {
    error.description = "invalid character";
  } else if (game.description.length < 20 || game.description.length > 150) {
    error.description =
      "the length of the text must be between 20 and 150 words";
  }

  if (!game.platforms) {
    error.platforms = "is required at least one platform";
  }

  return error;
};

const Form = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    released: "",
    name: "",
    rating: "",
    description: "",
    platforms: "",
    Genres: [],
  });

  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log({ form });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Videogame created succesfully!!");
    setForm({
      released: "",
      name: "",
      rating: "",
      description: "",
      platforms: "",
      Genres: [],
    });
  };

  return (
    <div className={s.container}>
      <div className={s.containerInfo}>
        <form>
          <fieldset>
            <legend>please type the new game info</legend>
            <br />
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="max 20 characters"
              onChange={(e) => handleChange(e)}
              required
            />
            <br />
            {error.name ? <span className={s.error}>{error.name}</span> : null}
            <br />
            <label htmlFor="released">Released date: </label>
            <input
              type="date"
              name="released"
              value={form.released}
              onChange={(e) => handleChange(e)}
              required
            />
            <br />
            {error.released ? (
              <span className={s.error}>{error.released}</span>
            ) : null}
            <br />
            <label htmlFor="reating">Rating: </label>
            <input
              type="text"
              name="rating"
              value={form.rating}
              placeholder="a number between 1 or 10"
              onChange={(e) => handleChange(e)}
              required
            />
            <br />
            {error.rating ? (
              <span className={s.error}>{error.rating}</span>
            ) : null}
            <br />
            <label htmlFor="description">Description: </label>
            <br />
            <textarea
              onChange={(e) => handleChange(e)}
              name="description"
              value={form.description}
              placeholder="type a description about the game..."
              required
            ></textarea>
            <br />
            {error.description ? (
              <span className={s.error}>{error.description}</span>
            ) : null}
            <br />
            <label htmlFor="platforms">Platforms: </label>
            <select
              name="platforms"
              value={form.platforms}
              required
              onChange={(e) => handleChange(e)}
            >
              {platforms.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
            <br />
            {error.platforms ? (
              <span className={s.error}>{error.platforms}</span>
            ) : null}
            <br />
            <label>
              <input
                type="checkbox"
                value="PlayStation 5"
                name="platforms"
                onChange={(e) => handleChange(e)}
              />
              PlayStation 5
            </label>
            <label>
              <input
                type="checkbox"
                value="Xbox"
                name="platforms"
                onChange={(e) => handleChange(e)}
              />
              Xbox
            </label>

            <button
              onClick={handleSubmit}
              className={
                error.name ||
                error.description ||
                error.released ||
                error.platforms ||
                error.rating ||
                error.genres
                  ? s.btnError
                  : s.btn
              }
            >
              <ion-icon name="game-controller"></ion-icon>
            </button>
          </fieldset>
        </form>
      </div>
      <div className={s.containerCard}>
        <h4>container card</h4>
      </div>
    </div>
  );
};

export default Form;
