import React, { useState } from 'react';
import Media from 'react-media';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../assets/scss/ItemList.scss';


const ItemsList = () => {
  const [data, setState] = useState({
    products: [
      {
        name: 'product1',
        sale: true,
      },
    ],
  });


  console.log(data.products);
  return (
    <CarouselProvider
      totalSlides={6}
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      className="size-carr"
    >

      <div className="container">
        <Slider className="slider">
          <Slide index={0}>
            <div className="img1" />
          </Slide>
          <Slide index={1}>
            <div className="img2" />
          </Slide>
          <Slide index={2}>
            <div className="img3" />
          </Slide>
          <Slide index={3}>
            <div className="img4" />

          </Slide>
          <Slide index={4}>
            <div className="img5" />

          </Slide>
          <Slide index={5}>
            <div className="img6" />

          </Slide>
        </Slider>
        <ButtonBack className="buttonBack">&lt;</ButtonBack>
        <ButtonNext className="buttonNext">&gt;</ButtonNext>
      </div>
    </CarouselProvider>

  );
};

export default ItemsList;
