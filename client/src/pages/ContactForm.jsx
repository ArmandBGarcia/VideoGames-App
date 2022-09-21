import React from "react";
import emailjs from "emailjs-com";
import s from "./styles/ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xn7cyqm",
        "template_fduzfm9",
        e.target,
        "7wkI-pqxkp4uugnlP"
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Message sent successfully");
        } else alert("Message not sent, something went wrong");
      });
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className={s.container}>
      <div className={s.containerForm}>
        <h3 className={s.title}>Contact Form</h3>
        <hr />
        <form onSubmit={sendEmail}>
          <div>
            <label>
              <p>Nombre</p>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>
          <div>
            <label>
              <p>Email</p>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>
          <div>
            <label>
              <p>Message</p>
            </label>
            <textarea
              className={s.textarea}
              name="message"
              id="message"
              onChange={handleChange}
              value={form.message}
              required
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
