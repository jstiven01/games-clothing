import React, { useState } from 'react';
import Media from 'react-media';
import '../assets/scss/MainProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faTwitter, faYoutube, faTumblr,
} from '@fortawesome/free-brands-svg-icons';

const MainProduct = () => {
  const [data, setState] = useState({
    rating: 4,
    socialMedia: [faFacebook, faTwitter, faTumblr, faYoutube],
    sizes: ['XS', 'S', 'M'],
    colors: ['#77d8e7', '#96c795', '#ce92a1', '#aa93cf'],
    visibleSocial: false,
  });

  const ratingStars = (rating = data.rating) => {
    const jsxStars = [];
    for (let index = 0; index < 5; index += 1) {
      if (index <= rating - 1) {
        jsxStars.push(<FontAwesomeIcon key={index} icon={faStar} style={{ color: '#ce2c52' }} />);
      } else {
        jsxStars.push(<FontAwesomeIcon key={index} icon={faStar} style={{ color: '#ababab' }} />);
      }
    }
    return <div>{jsxStars}</div>;
  };

  const jsxSocialMedia = data.socialMedia.map(brand => (
    <button key={brand.iconName} type="button" className={`buttons-social-media background-color-${brand.iconName}`} aria-label={brand.iconName}><FontAwesomeIcon icon={brand} /></button>
  ));

  const jsxSizes = data.sizes.map(size => (
    <span key={size}>{size}</span>
  ));

  const jstColors = data.colors.map(color => (
    <button key={color} type="button" className="buttons-colors" aria-label={color} style={{ backgroundColor: `${color}` }} />
  ));

  const handleClick = () => {
    setState({
      ...data,
      visibleSocial: !data.visibleSocial,
    });
  };


  return (
    <div className="main">
      <Media query="(max-width: 1023px) ">
        <div className="main-title-section">
          <span className="main-title">For Gamers by Gamers Tee</span>
        </div>
      </Media>

      <div className="main-product-info">
        <div className="main-img">
          <Media query="(min-width: 768px) and (max-width:1023px)">
            <div className="social-media-section">
              {jsxSocialMedia}
            </div>
          </Media>
        </div>
        <div className="product-details">
          <Media query="(min-width: 1024px) ">
            <div className="main-title-section">
              <span className="main-title">For Gamers by Gamers Tee</span>
            </div>
          </Media>
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
            <Media query="(min-width: 1024px) ">
              <div>
                <div
                  role="button"
                  className="title-share"
                  onClick={handleClick}
                  onKeyDown={handleClick}
                  tabIndex={0}
                >
                  Share it!
                </div>
                {data.visibleSocial && (
                <div
                  className="social-media-section"
                  onClick={handleClick}
                  onKeyDown={handleClick}
                  role="button"
                  tabIndex={0}

                >
                  {jsxSocialMedia}
                </div>
                )}
              </div>
            </Media>

          </div>
          <Media query="(max-width: 767px)">
            <div className="social-media-section">
              {jsxSocialMedia}
            </div>
          </Media>
          <Media query="(min-width: 768px) and (max-width:1023px)">
            <span className="details">DETAILS: </span>

          </Media>
          <div className="description-product">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus, quibusdam? Ducimus totam necessitatibus ipsa molestiae,
            eveniet, quibusdam explicabo est voluptate quaerat maxime asperiores!
            Voluptatibus non facilis autem aperiam distinctio hic!Magnam, veniam?
            Iure molestias, voluptatem quia tempore distinctio commodi asperiores
          </div>
          <div className="size-section">
            <Media query="(max-width: 767px)">
              {matches => {
                const titleSize = matches ? 'SELECT A SIZE: ' : 'SIZE: ';
                return (<span>{titleSize}</span>);
              }}
            </Media>
            <div className="name-sizes">
              {jsxSizes}
            </div>
          </div>
          <div className="color-section">
            <Media query="(max-width: 767px)">
              {matches => {
                const titleColor = matches ? 'SELECT A COLOR: ' : 'COLOR: ';
                return (<span>{titleColor}</span>);
              }}
            </Media>
            <div className="colors">
              {jstColors}
            </div>
          </div>
          <div className="section-button-cart">
            <button type="button" className="button-cart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MainProduct;
