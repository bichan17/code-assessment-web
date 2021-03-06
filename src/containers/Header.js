import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import { openModal } from '../actions'

const Header = ({ products, openModal}) => (
  <div className="component-header">
    <h1>Acme Store</h1>
    <button onClick={openModal} className="cart-img"><img src="./assets/img/cart-icon.svg" alt="cart-icon" /> {products.length ? 'View Cart': 'Your cart is empty'}</button>
  </div>
)

const mapStateToProps = state => ({
  products: getCartProducts(state),
})

export default connect(
  mapStateToProps,
  {openModal}
)(Header)