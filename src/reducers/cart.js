import {
  ADD_TO_CART,
  SUBTRACT_FROM_CART,
  DELETE_ALL_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case SUBTRACT_FROM_CART:
      //disable if there is one left
      if (quantityById[action.productId] < 2){
        return state.filter(el => action.productId !== el)
      }
      return state
    case DELETE_ALL_FROM_CART:
      return state.filter(el => action.productId !== el)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case SUBTRACT_FROM_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) - 1
      }
    case DELETE_ALL_FROM_CART:
      return{
        ...state,
        [productId] : 0
    }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
