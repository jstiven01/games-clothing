import React, { useState } from 'react';
import '../assets/scss/MainProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const MainProduct = () => {
  const [data] = useState({
    rating: 4,
  });

  const ratingStars = (rating = data.rating) => {
    const jsxStars = [];
    for (let index = 0; index < 5; index += 1) {
      if (index <= rating - 1) {
        jsxStars.push(<FontAwesomeIcon icon={faStar} style={{ color: '#ce2c52' }} />);
      } else {
        jsxStars.push(<FontAwesomeIcon icon={faStar} style={{ color: '#ababab' }} />);
      }
    }
    return <div>{jsxStars}</div>;
  };

  return (
    <div className="main">
      <div className="main-title-section">
        <span className="main-title">For Gamers by Gamers Tee</span>
      </div>
      <div className="main-img" />
      <div className="product-details">
        <span className="reference">Item #: 701642853695</span>
        <div className="prices">
          <div className="real-price">
            <span>$</span>
            <span className="price-digit">29.50</span>
          </div>
          <div className="discount-price">
            <span>$</span>
            <span className="price-digit">19.99</span>
          </div>


        </div>
        <div className="rating-stars">
          {ratingStars()}
        </div>
        <div className="social-media-section background-star">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="description-product">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus, quibusdam? Ducimus totam necessitatibus ipsa molestiae,
          eveniet, quibusdam explicabo est voluptate quaerat maxime asperiores!
          Voluptatibus non facilis autem aperiam distinctio hic!Magnam, veniam?
          Iure molestias, voluptatem quia tempore distinctio commodi asperiores
          sint doloribus nostrum vel alias. Et at numquam hic eum. Dolores dignissimos
          eius voluptatibus? Ex id rerum at dolores provident!
        </div>
        <div className="size-section">
          <span>SELECT A SIZE</span>
          <ul>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
          </ul>
        </div>
        <div className="color-section">
          <ul>
            <li>green</li>
            <li>red</li>
            <li>blue</li>
          </ul>
        </div>
        <div className="button-cart">
          <button type="button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};


export default MainProduct;
