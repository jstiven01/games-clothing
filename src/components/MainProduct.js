import React from 'react';
import '../assets/scss/MainProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const MainProduct = () => (
  <div className="main">
    <div className="main-title-section">
      <span className="main-title">For Gamers by Gamers Tee</span>
    </div>
    <div className="main-img" />
    <div className="product-details">
      <span>Item #: 701642853695</span>
      <div className="prices">
        <span>29.50</span>
        <span>19.99</span>
      </div>
      <div className="rating-stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="social-media-section">
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

export default MainProduct;
