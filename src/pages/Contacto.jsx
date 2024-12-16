import React from 'react';
import './EstilosC.css';

function Contacto() {
  return (
    <div className="form-container">
      <h1>Contacto</h1>
      <p>Si tienes preguntas sobre nuestros productos farmacéuticos, medicamentos o cualquier otro servicio de salud, por favor, envíanos un mensaje y te responderemos lo antes posible.</p>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text"  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" name="email" type="email" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input id="address" name="address" type="text"  />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" ></textarea>
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
