// src/components/CarouselComponent.jsx
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// Lista de imágenes para el carrusel (productos farmacéuticos)
const items = [
  {
    src: 'https://www.merck-animal-health-usa.com/wp-content/uploads/sites/54/2023/11/DOLOREX%C2%AE-butorphanol-tartrate-injection-product-image-1600x1600-1.png',
    key: 1,
    caption: 'Dolorex: Analgésico y antiinflamatorio',
  },
  {
    src: 'https://www.saebolivia.com/wp-content/uploads/2022/11/2748.png',
    key: 2,
    caption: 'Paracetamol: Para el alivio del dolor',
  },
  {
    src: 'https://hpmedical.com.bo/78-large_default/tiras-reactivas-para-prueba-de-glicemia-x-25-un-prodigy.jpg',
    key: 3,
    caption: 'Tiras Reactivas para Control de Diabetes',
  },
  {
    src: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699869821-5176LO3DpnL.jpg?crop=0.695xw:0.868xh;0.162xw,0.0651xh&resize=980:*',
    key: 4,
    caption: 'Cerave, para piel seca',
  },
  {
    src: 'https://lainco.com/wp-content/uploads/2023/09/Clorhexidina-Lainco-10-mgml-solucion-para-pulverizacion-cutanea-1-1024x799.png',
    key: 6,
    caption: 'Antiséptico para Cortes y Raspones',
  },
];

function Carousel2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Manejadores de la navegación del carrusel
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Generar los slides del carrusel
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.caption} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carousel2;
