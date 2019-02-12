import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, children }) => (
  <div className="component-product">
    <div className="product-item-image-wrapper">
      <img src={`./assets/img/${title}.jpg`} alt={title} />
    </div>
    <div className="product-info">
      <div className="product-description">
        <h2>{title}</h2>
        <div className="product-price">${price}</div>
      </div>

      <div className="product-inventory">
        {inventory ? `${inventory} Remaining` : null}
      </div>
      {children}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Product
