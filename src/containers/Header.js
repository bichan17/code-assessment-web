import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'

const Header = ({ products, openModal}) => (
  <div className="component-header">
    <h1>Acme Store</h1>
    <div className="cart-img"><img src="./assets/img/cart-icon.svg" alt="cart-icon" /> {products.length ? 'View Cart': 'Your cart is empty'}</div>
  </div>
)

const mapStateToProps = state => ({
  products: getCartProducts(state),
})

export default connect(
  mapStateToProps
)(Header)