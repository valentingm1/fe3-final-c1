import React, { useState } from "react";
import "./Form.css";
import { useContextGlobal } from "./utils/global.context";

const Form = () => {
  const { state } = useContextGlobal();
  const darkmode = state.theme ? "dark" : "";

  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre.length <= 5 || !validateEmail(formData.email)) {
      setError(true);
      setSubmitted(false);
    } else {
      console.log("Datos enviados:", formData);
      setSubmitted(true);
      setError(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container" id={`${darkmode}`}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className={`${darkmode}`}>
        <div className="form-group">
          <label>Nombre completo:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {error ? (
          <p className="error-message">
            "Por favor verifique su información nuevamente"
          </p>
        ) : (
          ""
        )}
        {submitted ? (
          <p>
            Gracias {formData.nombre}, te contactaremos cuanto antes vía mail.
          </p>
        ) : (
          ""
        )}
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
