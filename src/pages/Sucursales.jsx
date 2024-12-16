import React from 'react';
import './EstilosS.css'

function Sucursales() {
  return (
    <div className="form-container">
      <div className="titulo">
        <h1>Nuestras Sucursales</h1>
      </div>
      <div className="form-row">
        <div className="form-group cuerpoImg">
          <img className="imagen" src="https://vifarma.es/sites/default/files/farmacia_fachada_010.jpg" alt="Sucursal Principal" style={{ objectFit: 'contain' }} />
        </div>
        <div className="cuerpo">
          <div className="form-group">
            <label>Dirección Principal</label>
            <p className="color">Av. Central #123, Ciudad Salud</p>
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <p className="color">+591 78412356</p>
          </div>
          <div className="form-group">
            <label>Horario de Atención</label>
            <p className="color">Lun - Sáb: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group cuerpoImg">
          <img className="imagen" src="https://tecnyfarma.com/wp-content/uploads/2022/03/022_20210528_63_0654-scaled-1-1.jpg" alt="Sucursal Secundaria" style={{ objectFit: 'contain' }} />
        </div>
        <div className="cuerpo">
          <div className="form-group">
            <label>Dirección Secundaria</label>
            <p className="color">Calle Salud #456, Centro Médico</p>
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <p className="color">+591 67847712</p>
          </div>
          <div className="form-group">
            <label>Horario de Atención</label>
            <p className="color">Lun - Vie: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sucursales;

