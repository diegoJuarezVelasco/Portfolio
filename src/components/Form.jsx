import React, { useState } from "react";
import './Form.css';
import axios from 'axios';
import Error from './Error';
function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const {name, phone, email, message} = formInfo;
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === '' || email.trim() === '' || message.trim() === '') {
        setError(true);
    }
    setError(false);


  }

  return (
    <div className="form-container clearfix">
      <form onSubmit={handleOnSubmit}>
        {error ? <Error/> : null}
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
        <input type="submit" value="Enviar" className="submit-button"/>
      </form>
    </div>
  );
}

export default Form;
