import React, { useState } from "react";
import Navbar from "../Navbar";
import classes from "../../styles/Contact.module.css";
import svg from "../../assets/msg.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    const { name, email, text } = formData;
    if (!name || !email || !text) return alert("Fill the all data");

    setFormData({
      name: "",
      email: "",
      text: "",
    });
    alert("success");
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className={`container ${classes.container}`}>
        <h2 className="header" style={{ marginBottom: "5px" }}>
          Contact Me
        </h2>
        <p className="header__para">
          <span>Email: nazmulislam.ni897@gmail | </span> Phone: 01734997789
          <span></span>
        </p>
        <div className={classes.contact}>
          <img className={classes.contact__img} src={svg} alt="messages" />
          <form onSubmit={formSubmit} className={classes.form__control}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleSubmit}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleSubmit}
            />
            <textarea
              name="text"
              value={formData.text}
              placeholder="Messages..."
              onChange={handleSubmit}
            />
            <button className="btn btn--sky" type="submit">
              Send Messages
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
