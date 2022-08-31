import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import platforms from "../helpers/platforms.js";
import { getGenres } from "../redux/actions.js";
import s from "./styles/Form.module.css";

const Form = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    released: "",
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log({ form });
  };

  return (
    <div className={s.container}>
      <form>
        <fieldset>
          <legend>create your own videogame 🎮</legend>
          <div className={s.name}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="invalid special characters"
              required
            />
          </div>
          <div className={s.date}>
            <label htmlFor="released">Released Date: </label>
            <input
              type="date"
              name="released"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={s.rating}>
            <label htmlFor="rating">Rating: </label>
            <input type="text" placeholder="A number between 0 - 10" />
          </div>
          <div className={s.description}>
            <label htmlFor="description">Description: </label>
            <input type="text" placeholder="description..." />
          </div>
          <div className={s.platforms}>
            <label htmlFor="platforms">Platforms: </label>
            <select name="platforms" id="1">
              <option value="" selected>
                Choose the platforms
              </option>
              {platforms.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="genres">Genres</label>
            <select name="genres" id="2">
              <option value="" selected>
                Select a genre
              </option>
              {genres.map((data) => (
                <option value={data.name}>{data.name}</option>
              ))}
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
