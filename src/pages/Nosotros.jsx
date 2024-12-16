import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const nosotros = [
  {
    id: 1,
    name: 'Dr. Juan Pérez',
    description: 'Farmacéutico con 10 años de experiencia en atención al cliente y asesoría de medicamentos.',
    image: 'https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2024/09/359a9ea2-dia-del-farmaceutico-696x464.jpg',
  },
  {
    id: 2,
    name: 'Dra. Laura García',
    description: 'Especialista en farmacología clínica y salud pública, con enfoque en medicamentos para enfermedades crónicas.',
    image: 'https://img.freepik.com/foto-gratis/farmaceutica-joven-hispana-sonriendo-segura-pie-gesto-brazos-cruzados-farmacia_839833-7087.jpg',
  },
  {
    id: 3,
    name: 'Lic. Carlos Sánchez',
    description: 'Farmacéutico con especialización en gestión de farmacias y distribución de medicamentos.',
    image: 'https://www.pmfarma.com/articulos/contenido/3258/image/farmaceutico.jpg',
  },
  {
    id: 4,
    name: 'Dra. Elena Ruiz',
    description: 'Experta en asesoramiento farmacéutico en salud y bienestar, con énfasis en atención personalizada a pacientes.',
    image: 'https://images.educamaisbrasil.com.br/content/noticias/pode-chamar-farmaceutico-de-doutor_g.jpg',
  },
];

function Nosotros() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Nosotros</h1>
      <Row>
        {nosotros.map((nosotros) => (
          <Col sm="12" md="6" lg="3" key={nosotros.id} className="mb-4">
            <Card className="shadow-sm border-0 rounded">
              <CardImg top width="100%" src={nosotros.image} alt={nosotros.name} />
              <CardBody>
                <CardTitle tag="h5" className="text-center">{nosotros.name}</CardTitle>
                <CardText className="text-muted">{nosotros.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Nosotros;
