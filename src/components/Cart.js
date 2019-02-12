import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, closeModal, addToCart, subtractFromCart, deleteAllFromCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cart-product" key={product.id}>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        >
          <button className="remove" onClick={() => deleteAllFromCart(product.id, product.quantity)}>Remove</button>
        </Product>


        <div className="cart-controls">
          <button
            className="button secondary left"
            onClick={() => subtractFromCart(product.id)}
            disabled={product.quantity - 1 === 0}
          >
            <span className="hidden">Decrease</span>
          </button>
          <label>
            <span className="hidden">Quantity:</span>
            <input
              value={product.quantity}
              onClick={event => {
                event.target.select()
              }}
              onChange={event => {
                this.onQuantityChange(event, product.id)
              }}
            />
          </label>
          <button
            className="button secondary right"
            onClick={() => addToCart(product.id)}
            disabled={product.inventory === 0}
          >
            <span className="hidden">Increase</span>
          </button>
        </div>
      </div>
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
        <div className="cart-checkout">
          {hasProducts && (
            <div className="cart-total">
              <span>Total:</span>
              <span className="price">${total}</span>
            </div>
            )}
          {hasProducts && (
            <button className="button checkout" onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button>
          )}
        </div>
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
