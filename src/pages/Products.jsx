import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Container } from 'reactstrap';

const products = [
  {
    id: 1,
    name: 'CafiAspirina',
    description: 'Alivio rápido y eficaz para el dolor de cabeza.',
    image: 'https://www.aspirina.es/sites/g/files/vrxlpx52436/files/styles/desktop_1000xauto/public/2021-02/Teaser_Image_Cafiaspirina.png?itok=sOl9-vDe',
  },
  {
    id: 2,
    name: '4Life',
    description: 'Refuerza tus defensas con este suplemento.',
    image: 'https://media2.4life.com/products/Bolivia-nuevo-tf-plus.png?width=1000&mode=crop&quality=80',
  },
  {
    id: 3,
    name: 'Cerave',
    description: 'Hidrata y nutre tu piel con esta crema.',
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699869821-5176LO3DpnL.jpg?crop=0.695xw:0.868xh;0.162xw,0.0651xh&resize=980:*',
  },
  {
    id: 4,
    name: 'Termómetro Digital',
    description: 'Medición precisa de temperatura corporal.',
    image: 'https://farmacorp.com/cdn/shop/files/709716_grande.jpg?v=1714434536',
  },
  {
    id: 5,
    name: 'Maxilina',
    description: 'Antibióticos eficaces para el tratamiento de infecciones.',
    image: 'https://dopharmadominicana.com/wp-content/uploads/2023/09/Maxilina-la.-Antibiotico-Inyectable_Mesa-de-trabajo-1.jpg',
  },
  {
    id: 6,
    name: 'Jabón Antibacterial Protex',
    description: 'Jabón para la higiene personal con propiedades antibacterianas.',
    image: 'https://www.protex-soap.com/content/dam/cp-sites/personal-care/protex-relaunch/latam/products/jab%C3%B3n-antibacterial-protex-avena-110-g.jpg',
  },
  {
    id: 7,
    name: 'Lentes de Sol con Filtro UV',
    description: 'Protege tus ojos con lentes de sol de alta calidad.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cbGJex4snmT9jgMaCYNpZDhMXAVWkY2ZGg&s',
  },
  {
    id: 8,
    name: 'Bepanthol',
    description: 'Alivia la piel irritada y con dermatitis con esta crema.',
    image: 'https://images.ecestaticos.com/cc8_FcgXJZtc0Rgs05sbnzGNDEA=/11x9:1579x886/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F0f1%2F53f%2F0d3%2F0f153f0d38bc12e781a16864aef2d889.jpg',
  },
  {
    id: 9,
    name: 'Lysoform',
    description: 'Desinfecta superficies de manera rápida y segura.',
    image: 'https://www.fidalga.com/cdn/shop/products/15deed2f-ab59-497a-b893-aaf2a0a331c5_d1158e61-a0c6-4340-b982-0747dbc08983.png?v=1653345348',
  },
  {
    id: 10,
    name: 'Mascarilla Protectora',
    description: 'Mascarilla reutilizable para protección diaria.',
    image: 'https://i5.walmartimages.com/asr/7641f0b4-2e6b-4b64-a350-764f25385e5e.f0dd4bf18fe34c2ca4a579166e637c22.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
  },
  {
    id: 11,
    name: 'Neurexan',
    description: 'Suplemento natural para aliviar el estrés y la ansiedad.',
    image: 'https://neurexan.heel.cl/getmedia/6b513bed-a180-4ecd-b06e-75a4fb8d496c/Neurexan_com_Product-CL.png',
  },
  {
    id: 12,
    name: 'Doloflex',
    description: 'Alivia dolores musculares con este gel relajante.',
    image: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/doloflex/Productos_455x455_doloflex.png?auto=format',
  },
];

function Products() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Productos Farmacéuticos</h1>
      <Row>
        {products.map((product) => (
          <Col sm="12" md="6" lg="3" key={product.id} className="mb-4">
            <Card className="shadow-sm border-0 rounded">
              <CardImg top width="100%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle tag="h5" className="text-center">{product.name}</CardTitle>
                <CardText className="text-muted">{product.description}</CardText>
                <div className="text-center">
                  <Button color="success" size="sm">Comprar</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
