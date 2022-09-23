import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NewGame from "../components/NewGame.jsx";
import platforms from "../helpers/platforms.js";
import { createGame, getGenres, updateVideogame } from "../redux/actions.js";
import s from "./styles/Form.module.css";

const validate = (game) => {
  let error = {};
  let regex = {
    onlyNumbers: /^([0-9])*$/,
    float: /^[0-9]+([,.][0-9]+)?$/,
    onlyLetters: /^[a-zA-Z_ -]+$/,
    urlImage: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
    date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  };

  if (!game.rating) {
    error.rating = "rating is required!";
  } else if (!regex.float.test(game.rating)) {
    error.rating = "only numbers please!";
  } else if (game.rating < 0.1 || game.rating > 5) {
    error.rating = "rating must be between 0.1 or 5!";
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
  } else if (game.name.length > 20 || game.name.length < 5) {
    error.name = "name lenght must be between 5 and 20 characters";
  }

  if (!game.description) {
    error.description = "Description is required";
  } else if (!regex.onlyLetters.test(game.description)) {
    error.description = "invalid character";
  } else if (game.description.length < 20 || game.description.length > 150) {
    error.description =
      "the length of the text must be between 20 and 150 words";
  }

  if (!game.image) {
    error.image = "image required!";
  } else if (!regex.urlImage.test(game.image)) {
    error.image = "invalid url image";
  }

  if (game.genres.length === 0) {
    error.genres = "is required at least one genre";
  } else if (game.genres.length > 6) {
    error.genres = "maximun 6 genres per game";
  }

  if (game.strs.length === 0) {
    error.strs = "is required at least one platform";
  } else if (game.strs.length > 4) {
    error.strs = "maximun 4 platforms";
  }

  return error;
};

const VideogameEdit = () => {
  const { id } = useParams();
  const generos = useSelector((state) => state.genres);

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    released: "",
    name: "",
    image: "",
    rating: "",
    description: "",
    strs: [],
    genres: [],
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
    // console.log({ error });
  };

  const handlePlatform = (e) => {
    e.preventDefault();
    setError(
      validate({
        ...form,
        [e.target.name]: [e.target.value],
      })
    );
    setForm({
      ...form,
      strs: !form.strs.includes(e.target.value)
        ? [...form.strs, e.target.value]
        : form.strs.filter((p) => p !== e.target.value),
    });
    if (form.strs.length > 3) {
      alert(
        "Sorry, exceeded the number of platforms allowed, please delete one"
      );
    }
    // console.log({ form });
  };

  const handleGenres = (e) => {
    e.preventDefault();
    setError(
      validate({
        ...form,
        [e.target.name]: [e.target.value],
      })
    );
    setForm({
      ...form,
      genres: !form.genres.includes(e.target.value)
        ? [...form.genres, e.target.value]
        : form.genres.filter((g) => g !== e.target.value),
    });
    if (form.genres.length > 5) {
      alert("Sorry, exceeded the number of genres allowed, please delete one");
    }
    // console.log({ form });
  };

  const deletePlatform = (e) => {
    setForm({
      ...form,
      strs: form.strs.filter((c) => c !== e),
    });
  };

  const deleteGenre = (e) => {
    setForm({
      ...form,
      genres: form.genres.filter((c) => c !== e),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateVideogame(id, form));
    setForm({
      released: "",
      name: "",
      image: "",
      rating: "",
      description: "",
      strs: [],
      genres: [],
    });
  };

  return (
    <div>
      <Link to="/home">
        <button className={s.btn1}>
          <ion-icon name="arrow-undo"></ion-icon>
        </button>
      </Link>
      <div className={s.container}>
        <h1 className={s.title}>Video Game Edit Page</h1>
        <div className={s.containerInfo}>
          <form>
            <fieldset>
              <legend>please type the new info</legend>
              <br />
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="max 20 characters"
                onChange={handleChange}
                required
              />
              <br />
              {error.name ? (
                <span className={s.error}>{error.name}</span>
              ) : null}
              <br />
              <label htmlFor="image">Image: </label>
              <input
                type="text"
                name="image"
                value={form.image}
                placeholder="url image..."
                onChange={handleChange}
                required
              />
              <br />
              {error.image ? (
                <span className={s.error}>{error.image}</span>
              ) : null}
              <br />
              <label htmlFor="released">Released date: </label>
              <input
                type="date"
                name="released"
                value={form.released}
                onChange={handleChange}
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
                placeholder="a number between 0.1 or 5"
                onChange={handleChange}
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
                onChange={handleChange}
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
              <label htmlFor="strs">Platforms: </label>
              <select
                name="strs"
                value={form.strs}
                required
                onChange={handlePlatform}
              >
                <option value="" selected>
                  max 4 platforms...
                </option>
                {platforms?.map((data) => (
                  <option value={data}>{data}</option>
                ))}
              </select>
              <br />
              {error.strs ? (
                <span className={s.error}>{error.strs}</span>
              ) : null}
              <br />
              <label htmlFor="genres">Genres: </label>
              <select
                name="genres"
                value={form.genres}
                required
                onChange={handleGenres}
              >
                <option value="" selected>
                  max 6 genres...
                </option>
                {generos?.map((data) => (
                  <option value={data.name}>{data.name}</option>
                ))}
              </select>
              <br />
              {error.genres ? (
                <span className={s.error}>{error.genres}</span>
              ) : null}
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
                disabled={
                  error.name ||
                  error.description ||
                  error.released ||
                  error.platforms ||
                  error.rating ||
                  error.genres
                    ? true
                    : false
                }
              >
                <ion-icon name="game-controller"></ion-icon>
              </button>
            </fieldset>
          </form>
        </div>
        <div>
          <NewGame
            form={form}
            deleteGenre={deleteGenre}
            deletePlatform={deletePlatform}
          />
        </div>
      </div>
    </div>
  );
};

export default VideogameEdit;
