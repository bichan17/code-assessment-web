import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header'

const App = () => (
  <div className="site-container site-container--gutters">
    <Header />
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
