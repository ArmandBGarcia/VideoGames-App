import React from "react";
import s from "./styles/ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={s.container}>
      <div className={s.containerForm}>
        <h3 className={s.title}>Contact Form</h3>
        <hr />
        <form action="">
          <div>
            <label>
              <p>Nombre</p>
            </label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label>
              <p>Email</p>
            </label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label>
              <p>Message</p>
            </label>
            <textarea
              className={s.textarea}
              name="mesagge"
              id="message"
            ></textarea>
          </div>
          <button className={s.btn} type="submit">
            Send mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
