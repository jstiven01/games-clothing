import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/Item.scss';

const Item = ({ product }) => (
  <div className="product-item">
    <div className="product-img-price">
      <div className={product.name}>
        <div className={`price-product ${product.sale && 'sale'}`}>
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
    description: PropTypes.string,
  }).isRequired,
};

export default Item;
