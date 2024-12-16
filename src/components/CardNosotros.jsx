import './Nosotros.css'; 

function CardNosotros({ nosotros }) {
  return (
    <div className="custom-card">
      <img className="custom-card-img" src={nosotros.image} alt={nosotros.name} />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{nosotros.name}</h5>
        <p className="custom-card-text">{nosotros.description}</p>
      </div>
    </div>
  );
}

export default CardNosotros;
