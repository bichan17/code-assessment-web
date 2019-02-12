import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <li className="component-product-item">
    <div className="product-item-image-wrapper">
      <img src={`./assets/img/${product.title}.jpg`} alt={product.title} />
    </div>
    <div className="product-item-info">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <div className="product-item-actions">
        <button 
          className="button"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  </li>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
