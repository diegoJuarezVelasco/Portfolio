import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Error from "./Error";
import Spinner from "./Spinner";
import Swal from "sweetalert2";

function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const { name, phone, email, message } = formInfo;
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await axios({
        method: "POST",
        baseURL: "https://warm-fortress-53896.herokuapp.com",
        url: "/send",
        data: formInfo,
      });

      Swal.fire({
        icon: "success",
        title: "¡Genial!",
        text: "Tu mensaje ha sido enviado 🙂",
      });
    } catch (error) {
      setCargando(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salío mal 🙁",
        footer: "Inténtalo nuevamente",
      });
    }
    setCargando(false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setCargando(false);
      setError(true);
      return;
    }
    setError(false);
    sendEmail();
  };

  return (
    <div className="form-container clearfix">
      <form onSubmit={handleOnSubmit}>
        <div className="form-first-col">
          <div className="field-container">
            <label htmlFor="name">Nombre </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="field-container">
            <label htmlFor="phone">Télefono (opcional)</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div className="field-container">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        <div className="form-second-col">
          <div className="field-container">
            <label htmlFor="message">Mensaje</label>
            <textarea
              type="text"
              id="message"
              value={message}
              onChange={handleChange}
              name="message"
            />
          </div>
        </div>
        <input type="submit" value="Enviar" className="submit-button" />
        {cargando ? <Spinner /> : null}

        {error ? <Error msg={"Completa los campos requeridos"} /> : null}
      </form>
    </div>
  );
}

export default Form;
