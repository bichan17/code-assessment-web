import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const subtractFromCartUnsafe = productId => ({
  type: types.SUBTRACT_FROM_CART,
  productId
})

export const subtractFromCart = productId => (dispatch, getState) => {
  dispatch(subtractFromCartUnsafe(productId))
}

export const deleteAllFromCart = (productId,inventory) => (dispatch, getState) => {
  dispatch({type: types.DELETE_ALL_FROM_CART,productId,inventory})
}


export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const openModal = () => dispatch =>{
  dispatch({
    type: types.OPEN_MODAL
  })
}

export const closeModal = () => dispatch => {
  dispatch({
    type: types.CLOSE_MODAL
  })
}