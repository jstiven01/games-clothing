import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import '../assets/scss/Item.scss';

const Item = ({ product }) => (
  <div className="product-item">
    <div className="product-img-price">
      <div className={product.name}>
        <div className={`price-product ${product.sale && 'sale'}`}>
          <Media query="(min-width: 1024px) ">
            <span className="old-price">{product.sale && product.oldPrice}</span>
          </Media>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
    <div className="description-product">
      <span>{product.description}</span>
    </div>
  </div>
);

Item.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    sale: PropTypes.bool,
    price: PropTypes.string,
    oldPrice: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Item;
