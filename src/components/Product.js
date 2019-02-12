import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="component-product">
    <div className="product-description">
      <h2>{title}</h2>
      <div className="product-price">${price}</div>
    </div>

    <div className="product-inventory">
      {inventory ? `${inventory} Remaining` : null}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
