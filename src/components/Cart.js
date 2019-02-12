import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, closeModal }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className="no-products">
      <img className="empty-cart-icon" src="./assets/img/cart-icon-gray.svg" alt="cart-icon" />
      <span>Please add some products<br />to your cart.</span>
    </div>
  )

  return (
    <div className="component-cart site-container--gutters">
      <div className="close-modal" onClick={closeModal}>
        <span className="hidden">Close Cart</span>
      </div>
      <h3>Your Cart</h3>
      <div className="cart-wrapper">
        <div className="cart-products">{nodes}</div>
        {hasProducts && (
          <p>Total: &#36;{total}</p>
        )}
        {hasProducts && (
          <button className="button" onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        )}
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
