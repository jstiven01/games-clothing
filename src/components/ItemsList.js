import React, { useState } from 'react';
import Media from 'react-media';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import Item from './Item';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../assets/scss/ItemList.scss';


const ItemsList = () => {
  const [data] = useState({
    products: [
      {
        name: 'img1',
        price: '$19.99',
        sale: true,
        description: 'For Gamers by Gamers Tee',
      },
      {
        name: 'img2',
        price: '$49.99',
        sale: false,
        description: 'Pro Gamer Slash Hoodie',
      },
      {
        name: 'img3',
        price: '$24.99',
        sale: false,
        description: 'Spectroom Gamer Tee',
      },
      {
        name: 'img4',
        price: '$19.99',
        sale: true,
        description: 'Gaming for Good Tee',
      },
      {
        name: 'img5',
        price: '$60.00',
        sale: false,
        description: 'Spectroom  Web Hoodie',
      },
      {
        name: 'img6',
        price: '$54.00',
        sale: false,
        description: 'Spectroom Varsity Hoodie',
      },
    ],
  });

  const jsxItems = data.products.map((product, index) => (
    <Slide index={index} key={product.name}>
      <Item product={product} />
    </Slide>
  ));


  return (
    <div className="product-section">
      <div className="title-section">
        <span>YOU MAY ALSO LIKE</span>
      </div>
      <CarouselProvider
        totalSlides={6}
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        className="size-carr"
      >

        <div className="container">
          <Slider className="slider">
            {jsxItems}
          </Slider>
          <ButtonBack className="buttonBack" />
          <ButtonNext className="buttonNext" />
        </div>
      </CarouselProvider>

    </div>


  );
};

export default ItemsList;
