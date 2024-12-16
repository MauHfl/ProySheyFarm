import React from 'react';
import { Button, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Container } from 'reactstrap';
import Carousel2 from '../components/Carousel2';

function Home() {
  return (
    <div className="home-page">
      <Container className="welcome-section text-center py-5">
        <h1 className="display-3">¡Bienvenido a la Farmacia Saludable!</h1>
        <p className="lead">Ofrecemos productos de calidad para tu salud y bienestar, ¡visítanos y mejora tu calidad de vida!</p>
        <Carousel2 />
      </Container>

      <Container className="text-center mb-5">
        <Button color="info" size="lg" className="shadow-sm">Descubre Nuestros Productos</Button>
      </Container>

      <Container className="featured-products py-5">
        <h2 className="text-center mb-4">Recomendados para Ti</h2>
        <Row className="justify-content-center">

          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card className="product-card shadow">
              <CardImg top width="100%" src="https://www.aspirina.es/sites/g/files/vrxlpx52436/files/styles/desktop_1000xauto/public/2021-02/Teaser_Image_Cafiaspirina.png?itok=sOl9-vDe" alt="Alivio rápido para el dolor de cabeza" />
              <CardBody>
                <CardTitle tag="h5">CAFIASPIRINA</CardTitle>
                <CardText>Alivia de forma efectiva los dolores de cabeza con nuestra fórmula rápida.</CardText>
                <Button color="primary">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card className="product-card shadow">
              <CardImg top width="100%" src="https://media2.4life.com/products/Bolivia-nuevo-tf-plus.png?width=1000&mode=crop&quality=80" alt="Suplemento para el sistema inmunológico" />
              <CardBody>
                <CardTitle tag="h5">4LIFE</CardTitle>
                <CardText>Refuerza tus defensas con este suplemento especializado.</CardText>
                <Button color="primary">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card className="product-card shadow">
              <CardImg top width="100%" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699869821-5176LO3DpnL.jpg?crop=0.695xw:0.868xh;0.162xw,0.0651xh&resize=980:*" alt="Crema hidratante para la piel" />
              <CardBody>
                <CardTitle tag="h5">CERAVE</CardTitle>
                <CardText>Mantén tu piel suave e hidratada todo el día con nuestra crema especial.</CardText>
                <Button color="primary">Comprar</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" md="6" lg="3" className="mb-4">
            <Card className="product-card shadow">
              <CardImg top width="100%" src="https://farmacorp.com/cdn/shop/files/709716_grande.jpg?v=1714434536" alt="Termómetro digital" />
              <CardBody>
                <CardTitle tag="h5">Termómetro Digital</CardTitle>
                <CardText>Medición precisa y rápida para cuidar a tu familia.</CardText>
                <Button color="primary">Comprar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="benefits-section text-center py-5">
        <h2>¿Por qué elegirnos?</h2>
        <Row className="mt-4">
          <Col md="4">
            <h4>Calidad Garantizada</h4>
            <p>Solo ofrecemos productos de marcas confiables para tu seguridad.</p>
          </Col>
          <Col md="4">
            <h4>Envío Rápido</h4>
            <p>Recibe tus productos en la puerta de tu casa de manera rápida y segura.</p>
          </Col>
          <Col md="4">
            <h4>Atención Personalizada</h4>
            <p>Te brindamos asesoramiento experto para que encuentres lo que necesitas.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
