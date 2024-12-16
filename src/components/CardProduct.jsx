import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

function CardProduct({ product }) {
  return (
    <Card>
      <CardImg top width="100%" src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <Link to={`/product/${product.name}`} > {/* Usamos Link para navegar a la ruta del producto */}
          <Button color="primary">Ver Detalles</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
