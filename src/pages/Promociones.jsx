import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function Promociones() {
  const promociones = [
    {
      name: 'Rodoxon',
      description: 'Compra 2 vitaminas para el sistema inmunológico y recibe un 20% de descuento en tu próxima compra.',
      image: 'https://www.redoxon.es/sites/g/files/vrxlpx52051/files/styles/desktop_1000xauto/public/2022-08/header_desktop_redoxon_200722_3.png?itok=sjILv_Fs',
    },
    {
      name: 'Cerave',
      description: 'Llévate una crema hidratante y una mascarilla facial con un 15% de descuento en el combo.',
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699869821-5176LO3DpnL.jpg?crop=0.695xw:0.868xh;0.162xw,0.0651xh&resize=980:*',
    },
    {
      name: 'ActroMadol',
      description: 'Descuento del 10% en todos los analgésicos durante esta semana.',
      image: 'https://www.actro.es/sites/g/files/vrxlpx38101/files/2020-10/actromadol_lateral_D.png',
    },
    {
      name: 'Sueros Orales',
      description: 'Compra un suero oral y recibe otro gratis en todas las presentaciones.',
      image: 'https://tvazteca.brightspotcdn.com/cb/65/7263881e4273bbe92aafc1cd32e5/diseno-sin-titulo-1.jpg',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Promociones Especiales</h1>
      <Row>
        {promociones.map((promocion, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5" className="text-success">{promocion.name}</CardTitle>
                <CardText>{promocion.description}</CardText>
                <img src={promocion.image} alt={promocion.name} className="img-fluid mb-3" />
                <Button color="primary">Aprovecha esta oferta</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Promociones;
