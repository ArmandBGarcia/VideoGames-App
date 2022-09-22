import React from "react";
import emailjs from "emailjs-com";
import s from "./styles/ContactForm.module.css";
import { Link } from "react-router-dom";
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
    <div>
      <p className={s.parrafo}>
        Wellcome to my contact page!! where you can send me an email or enter
        some of the social networks that I will leave you here below
      </p>
      <div className={s.container}>
        <Link to="/home">
          <button className={s.btnArrow}>
            <ion-icon name="arrow-undo"></ion-icon>
          </button>
        </Link>
        <div className={s.contButtons}>
          <a
            href="https://api.whatsapp.com/send/?phone=523311542006&text=Hello%20I'am%20Armando,%20please%20leave%20your%20message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={s.btnWhats}>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/armando-barriga-garcia-b53851229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={s.btnLinkedin}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </button>
          </a>
          <a
            href="https://github.com/ArmandBGarcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={s.btnGithub}>
              <ion-icon name="logo-github"></ion-icon>
            </button>
          </a>
        </div>

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
    </div>
  );
};

export default ContactForm;
