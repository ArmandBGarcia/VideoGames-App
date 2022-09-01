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
    error.released = "date invalid!";
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
  } else if (game.description.length < 20 || game.description.length > 100) {
    error.description =
      "the length of the text must be between 10 and 30 words";
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
      <h2 className={s.title}>Create A Game!!</h2>
      <form>
        <fieldset>
          <legend>Please type the videogame data</legend>
          <div className={s.fieldsetContainer}>
            <div>
              <div className={s.name}>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  placeholder="max 20 charcaters"
                  required
                  name="name"
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                />
                {error.name ? (
                  <span style={{ color: "red" }}>{error.name}</span>
                ) : null}
              </div>
              <div className={s.date}>
                <label htmlFor="released">Released Date: </label>
                <input
                  required
                  type="date"
                  name="released"
                  value={form.released}
                  onChange={(e) => handleChange(e)}
                />
                {error.released ? (
                  <span style={{ color: "red" }}>{error.released}</span>
                ) : null}
              </div>
              <div className={s.rating}>
                <label htmlFor="rating">Rating: </label>
                <input
                  required
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="rating"
                  value={form.rating}
                  placeholder="A number between 0 - 10"
                />
                {error.rating ? (
                  <span style={{ color: "red" }}>{error.rating}</span>
                ) : null}
              </div>
              <div className={s.description}>
                <label htmlFor="description">Description: </label>
                <textarea
                  className={s.textarea}
                  required
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={(e) => handleChange(e)}
                ></textarea>
                {error.description ? (
                  <span style={{ color: "red" }}>{error.description}</span>
                ) : null}
              </div>
              {/* <div className={s.platforms}>
            <label> Platforms: </label>
            <select
              name="platforms"
              id="1"
              required
              value={form.platforms}
              onChange={(e) => handleChange(e)}
            >
              <option value="" selected>
                Choose the platforms
              </option>
              {platforms.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div> */}

              {/* {platforms.map((data) => (
              <button>
                <input
                  type="checkbox"
                  value={form.platforms}
                  name="platforms"
                  onChange={(e) => handleChange(e)}
                />
                {data}
              </button>
            ))} */}

              <div>
                <label htmlFor="genres">Genres: </label>
                <select name="genres" id="2" required>
                  <option value="" selected>
                    Select a genre
                  </option>
                  {genres.map((data) => (
                    <option value={data.name}>{data.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              {platforms.map((data) => (
                <button
                  value={form.platforms}
                  name="platforms"
                  onChange={(e) => handleChange(e)}
                >
                  {data}
                </button>
              ))}
            </div>
            <div>
              {genres.map((data) => (
                <button value={data.name}>{data.name}</button>
              ))}
            </div>
          </div>
        </fieldset>
        <div>
          <button
            className={s.btn}
            onClick={handleSubmit}
            disabled={
              error.rating ||
              error.name ||
              error.description ||
              error.genres ||
              error.platforms ||
              error.released
            }
          >
            <ion-icon name="game-controller"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
